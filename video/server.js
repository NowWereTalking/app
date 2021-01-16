const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { v4: uuidV4 } = require('uuid');

app.use(bodyParser.json());

const Chat = require("./models/Chat");
const connect = require("./dbconnect");

io.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

   socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });
  
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);

   
    socket.broadcast.emit("received", { message: msg });

        connect.then(db => {
      console.log("connected correctly to the server");
      let chatMessage = new Chat({ message: msg, sender: "user" });

      chatMessage.save();
    });
  });
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
});


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

server.listen(3000)
// http.listen(port, () => {
//   console.log("Running on Port: " + port);
// });
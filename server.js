const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors')

const { v4: uuidV4 } = require('uuid');

app.use(bodyParser.json());

const Chat = require("./models/Chat");
const connect = require("./dbconnect");

io.on("connection", socket => {
  console.log("user connected");

  // socket.on("disconnect", function() {
  //   const user = removeUser(socket.id);

  //   if(user) {
  //     io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
  //     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
  //   }
  // });

  // socket.on('join',({name, room}, callback)=>{
  //   const { error, user } = addUser({ id: socket.id, name, room });

  //   if(error) return callback(error);

  //   socket.join(user.room);

  //   socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
  //   socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

  //   io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

  //   callback();
  // });

  // socket.on('sendMessage', (message, callback) => {
  //   const user = getUser(socket.id);

  //   io.to(user.room).emit('message', { user: user.name, text: message });

  //   callback();
  // });

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

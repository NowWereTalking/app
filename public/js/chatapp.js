var socket = io();
var messages = document.getElementById("messages");


//sending message to html
(function() {
  $("form").submit(function(e) {
    let li = document.createElement("li");
    e.preventDefault(); //prevents message from dissappering
    socket.emit("chat message", $("#message").val());
    messages.appendChild(li).append($("#message").val());
    let span = document.createElement("span");
    messages.appendChild(span).append("message by " + "user2");

    return false;
  });
//handling the receiving side of the chat
  socket.on("received", data => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    var messages = document.getElementById("messages");
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append("message by " + "user1");
  });
})();

let messageInput = document.getElementById("message");
let typing = document.getElementById("typing");

messageInput.addEventListener("keypress", () => {
  socket.emit("typing", { user: "Someone", message: "is typing..." });
});

socket.on("notifyTyping", data => {
  typing.innerText = data.user + " " + data.message;
  console.log(data.user + data.message);
});


messageInput.addEventListener("keyup", () => {
  socket.emit("stopTyping", "");
});

socket.on("notifyStopTyping", () => {
  typing.innerText = "";
});

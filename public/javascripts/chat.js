let socket, ns1, ns2;
let messageCount = 0;

function addMessage(msg) {
  messageCount += 1;
  let str;
  // decide message bg color
  if (messageCount % 2 == 1) {
    // message bg is lightgray
    str = '<div class="msg" style="background-color:lightgray">' + msg + '</div>'
  }
  else {
    //message bg is white
    str = '<div class="msg" style="background-color:white">' + msg +  '</div>'
  }
  let messageObj = $($.parseHTML(str));
  $("#msgContainer").append(messageObj);
}

$(document).ready(() => {
  ns1 = io('/namespace' + 1);
  socket = ns1;
  socket.on('msg', (msg) => {
    addMessage(msg);
  });

  $("#msgSubmit").click(() => {
    let msg = $("#msgInput").val();
    if (msg != "") {
      socket.emit('msg', msg);
      $("#msgInput").val("");
    }
  });

  $("#msgInput").keyup((event) => {
    if (event.keyCode == 13) {
      $("#msgSubmit").click();
    }
  });

  $("#selectRoom").change(() => {
    let num = parseInt($("#selectRoom").val().substr(4));
  });
});
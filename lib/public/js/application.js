function appendMessage (name, text) {
  $("#chat").append(name + ":" + text + "<br/>");
}

$("#send").click(function(event) {
  var name = $('#username').val();
  var text = $('#msgbody').val();
  if(name && text) {
    var data = JSON.stringify({ name: name, body: text });
    ws.send(data);
    $('#msgbody').val('');    
  }
});

var ws = new WebSocket(location.origin.replace(/^http/, 'ws'));

ws.onmessage = function(msg) {
  var data = JSON.parse(msg.data);
  if (data.body) {
    appendMessage(data.name, data.body);
  }
}

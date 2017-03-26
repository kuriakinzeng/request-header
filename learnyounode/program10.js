var net = require('net')
var date
var dateStr = '';
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}
function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}
var server = net.createServer(function(socket){
  socket.end(now() + '\n')
  // write to socket to send data to the requester
  // socket.write(dateStr)
  // socket.end()
})
server.listen(process.argv[2])
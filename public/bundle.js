var Peer = window.SimplePeer;
var p = new Peer({ initiator: location.hash === '#1', trickle: false, config: { iceServers: [ { url: 'stun:23.21.150.121' } ] } })

/*
var p = new Peer(
{
  initiator: location.hash === '#1',
  channelConfig: {},
  channelName: '<random string>',
  config: { iceServers: [ { url: 'stun:23.21.150.121' } ] },
  reconnectTimer: false,
  sdpTransform: function (sdp) { return sdp },
  stream: false,
  trickle: true
});
*/
p.on('error', function (err) { console.log('error', err) })

p.on('signal', function (data) {
  console.log('SIGNAL', JSON.stringify(data))
  document.querySelector('#outgoing').textContent = JSON.stringify(data)
})

document.querySelector('form').addEventListener('submit', function (ev) {
  ev.preventDefault()
  p.signal(JSON.parse(document.querySelector('#incoming').value))
})

p.on('connect', function () {
  alert("CONNECT");
  p.send('whatever' + Math.random())
})

p.on('data', function (data) {
 alert('data: ' + data)
})

var peer = new Peer({key: 'umreiafrr9wo2yb9'});

document.querySelector('form').addEventListener('submit', function (ev) {
	ev.preventDefault()

	var conn = peer.connect(document.querySelector('#incoming').value);
	conn.on('open', function(){
		conn.send('hi!');
	});

})

peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(conn) {
  conn.on('data', function(data){
    console.log(data);
  });
});

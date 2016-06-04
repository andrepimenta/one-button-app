var peer = new Peer({key: 'umreiafrr9wo2yb9'});

document.querySelector('form').addEventListener('submit', function (ev) {
	ev.preventDefault()

	var conn = peer.connect(document.querySelector('#incoming').value);
	conn.on('open', function(){
		conn.send([{type: 'url', url: 'http://www.google.pt'}, {type: 'url', url: 'http://www.facebook.com'}]);
	});
})

peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(conn) {
  conn.on('data', function(data){
	  var i=0;
	  for(i=0; i<data.length;i++){
		  if(data[i].type==='url')
			window.open(data[i].url, '_blank');
	  }
  });
});

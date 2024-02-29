var http = require('http');

var server = http.createServer(function(req,res){
	var categoria = req.url;
	if (categoria == '/cursos'){
		res.end('<html><body><h1>IFMS Not&iacute;cias de Cursos</h1></body></html>');
	} else if (categoria == '/esportes'){
		res.end('<html><body><h1>IFMS Not&iacute;cias de Esportes</h1></body></html>');
	}else if (categoria == '/pesquisa'){
		res.end('<html><body><h1>IFMS Not&iacute;cias de Pesquisa</h1></body></html>');
	}else{
		res.end('<html><body><h1>Portal de Not&iacute;cias IFMS</h1></body></html>');
	}
	// res.end('<html><body><h1>Promeiro Projeto</h1></body></html>')
});

server.listen(3000);
console.log('escutando a porta 3000');
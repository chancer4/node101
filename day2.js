var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHTML = fs.readFileSync('home-page.html');

function homePage(request, response){
	response.writeHead(200,{
			'content-type':'text/html'
		});
		response.end('home page')
}

var server = http.createServer(function(request, response){
	var pathName = url.parse(request.url)
	if(pathName.pathname == '/'){
		//user wants to see the home page
		homePage(request,response);
	}else if(pathName.pathname == '/about'){
		//user wants to see about page
		response.writeHead(200,{
			'content-type':'text/html'
		});
		response.end('about page')
	}else{
		response.writeHead(200,{
			'content-type':'text/html'
		});
		response.end('we did it')
	}
	response.writeHead(200,{
		'content-type':'text/html'
	});
	response.end('we did it')
});

server.listen(3939);
var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	
	exec("ls -lah", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
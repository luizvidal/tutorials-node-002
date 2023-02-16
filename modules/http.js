const http = require("http");
const port = 8080;
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
	if (req.url === "/home") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.end("<h1> Home page </h1>");
	}

	if (req.url === "/users") {
		const users = [
			{ name: "User 1", email: "user1@gmail.com" },
			{ name: "User 2", email: "user2@gmail.com" },
		];
		res.writeHead(200, { "Content-type": "aplication/json" });
		res.end(JSON.stringify(users));
	}
});

server.listen(port, hostname, (error) => {
	if (error) return console.log(error);
	console.log(`listenning on: 
  http://${hostname}:${port}`);
});

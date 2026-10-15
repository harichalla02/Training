
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/employeedataset.json") {
        fs.readFile("./employeedataset.json", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Unable to read JSON file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
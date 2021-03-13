const http = require("http");
const url = require("url");
function start(route, handle) {
function onRequest(request, response) {
    console.log("Request for " + pathname + " received");
route(handle, pathname, response);
}
http.createServer(onRequest).listen(3000);
    console.log("Server has started.");
}
exports.start = start;
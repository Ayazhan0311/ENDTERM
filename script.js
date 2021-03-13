const app = require("./app");
const request = require("./request");

const handle = {};
handle["/"] = request.start;
handle["/about"] = request.about;
handle["/img/gallery/graduation"] = request.graduation;
handle["/img/gallery/study"] = request.study;
handle["/video/memes"] = request.memes;

app.start(handle);
console.log("Its working")
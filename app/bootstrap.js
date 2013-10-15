var server = require("./server");
var router = require("./router");

function init() {
    //Start Server
    server.start(router.route);
}

exports.init = init;


var express = require("express");
var open = require("open");
var path = require("path");
var webpack = require("webpack");
var webpack_config_dev = require("../webpack.config.dev");
var port = 3000;
var app = express();
var compiler = webpack["default"](webpack_config_dev["default"]);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpack_config_dev_1["default"].output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    res.json([
        { "id": 1, "firstName": "Bob", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Charles", "email": "chuck@gmail.com" }
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});

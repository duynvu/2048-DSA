var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render("index");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server start");
})

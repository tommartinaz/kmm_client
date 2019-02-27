const express = require('express');
const path = require('path');
const servStatic = require('serve-static');

app = express();
app.use(servStatic(__dirname + '/dist'));

var port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on port ${port}`)
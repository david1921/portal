

var fs = require('fs');
const Server = require('./server.js')
const http = require('http');

const bodyParser = require('body-parser');
const port = (process.env.PORT || 3000)
const app = Server.app()
const routes = require('./routes.js')
var FormData = require('form-data');

routes(app);
app.use(bodyParser.json({limit: '50mb',})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));


app.listen(port, function(){
  console.log('listening on *:8080');
});
const Server = require('./server.js')
const http = require('http');
const path = require('path')
const indexPath = path.join(__dirname, 'index.html');
const port = (process.env.PORT || 8080)
const app = Server.app()

app.get('/', function (_, res) { 

     res.sendFile(indexPath);
     
   });

app.listen(port, function(){
  console.log('listening on *:8080');
});
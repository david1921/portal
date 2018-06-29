var fetch = require('node-fetch');
const path = require('path')
const indexPath = path.join(__dirname, 'index.html');
var fs = require('fs');
var FormData = require('form-data');

module.exports = (app) => {
    app.get('/companies/users', function (req, res) {
      var url = "http://localhost:3000/companies/172/reviews";

      fetch(url)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
            var data = JSON.stringify(json);
            res.json(json);
        });
      //resp = { status : "sucess"}
      
    })

    app.get('/locations/:id', function (req, res) {
      var url = "http://localhost:3000/locations/" + req.params.id;

      fetch(url)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
            var data = JSON.stringify(json);
            res.json(json);
        }).catch(err => console.error("Network error" + error));
      //resp = { status : "sucess"}
      
    })

    app.get('/companies/dashboard', function (req, res) {
      var url = "http://localhost:3000/companies/172/dashboard";

      fetch(url)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
            var data = JSON.stringify(json);
            res.json(json);
        });
      //resp = { status : "sucess"}
      
    })
    app.get('/*', function (_, res) { 
         res.sendFile(indexPath);
         
    });

    app.post('/signup/users', function (req, res) {
      resp = { status : 'sucess'}
      console.log(req.body.email)
      res.json(resp)
    })

//if upload doesnt work check require and import statements
    app.post('/listing/create', function (req, res) {
      resp = { status : 'sucess'}
     console.log(req.body.filename)

    var buff = new Buffer(req.body.attachment.replace(/^data:image\/\w+;base64,/, ""), 'base64');  
    fs.writeFileSync('stack-abuse-logo-out.png', buff);
    var form = new FormData();
    form.append('name', req.body.name);
    form.append('image', buff, req.body.filename);

    console.log(form.getHeaders())
    //https://portalapi.herokuapp.com/slides
    //http://localhost:3000/slides
    fetch('https://portalapi.herokuapp.com/slides', { method: 'POST', body: form,headers: form.getHeaders()})
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
        });
      res.json(resp)
    })

}

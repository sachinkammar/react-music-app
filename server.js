var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var user = require(path.join(__dirname, '/routes/user'));
var spotify = require(path.join(__dirname, '/routes/spotify'));

var db = require(path.join(__dirname,'/config/mongoose'));
var app = express();
var port = 5000;

app.use(function(req,res,next){
  res.setHeader('Access-Control-Max-Age',0);
  res.setHeader('Cache-Control', 'max-age=0,no-cache,no-store,post-check=0,pre-check=0,must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires','-1')
  return next()
})

app.use(bodyParser.json({limit:"250mb"}));
app.use(bodyParser.urlencoded({limit:"250mb", extended: true }));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(cors());
app.use(cookieParser())
app.use('/api/user', user);
app.use('/api/spotify', spotify);

app.use(express.static(path.join(__dirname, '/build')));

// app.get('/authorize',(req,res)=>{
//   console.log("called authorize")
//   var my_client_id = '345d383f8f774706b6ba416295f26849';
//   var redirect_uri = 'http://localhost:5000/callback'
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
// });
// app.get('/callback',(req,res)=>{
//   console.log("called callback");
//   var client_secret = '0ea82efed6334a98930372365439aae4';
//   var client_id = '345d383f8f774706b6ba416295f26849';
  
//   var data = {}
//   data.grant_type = 'client_credentials';
//   data.code = req.query.code;
//   data.redirect_uri = 'http://localhost:5000/'
  
//   rest.post('https://accounts.spotify.com/api/token', {
//   data: data,
//   headers: {
//     Authorization:
//       'Basic ' +
//       new Buffer(client_id + ':' + client_secret).toString('base64')
//   }
//   }).on('complete', function(data, response) {
//       // you can get at the raw response like this...
//       console.log("response","data",data)
//       res.redirect("http://localhost:5000/")
//   });
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
  console.log(err)
  var err1 = new Error('Not Found');
  err1.status = 404;
  next(err1);
});
app.listen(port);
console.log("App listening on port 5000");

module.exports = app;

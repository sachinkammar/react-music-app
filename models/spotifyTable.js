var rest = require('restler');
var SpotifyWebApi = require('spotify-web-api-node');

module.exports = {
  getAccessToken:getAccessToken,
  getNewReleases:getNewReleases,
  getFeaturedPlaylists:getFeaturedPlaylists,
  getTopCharts:getTopCharts
}

var spotifyApi = new SpotifyWebApi();

function getAccessToken(req,callback){
  var obj = {
    signed: req.signedCookies,
    notSigned:req.cookies
  }
  spotifyApi.setAccessToken(req.cookies.access_token);
  callback(null,obj)
}

function getNewReleases(req,callback){
  spotifyApi.getNewReleases({ limit : 50, offset: 0, country: 'IN',locale: 'hi_HI' })
  .then(function(data) {
    callback(null,data)
  }, function(err) {
      console.log("Something went wrong!", err);
      callback(err,null)
  });
}

function getFeaturedPlaylists(req,callback){
  spotifyApi.getFeaturedPlaylists({ limit : 50, offset: 0, country: 'IN',locale: 'hi_HI' })
  .then(function(data) {
    callback(null,data)
  }, function(err) {
      console.log("Something went wrong!", err);
      callback(err,null)
  });
}

function getTopCharts(req,callback){
  spotifyApi.getUserPlaylists('i1apfndc9q6hsah66chy4ggu5')
  .then(function(data) {
    callback(null,data)
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
    callback(err,null)
  });
}
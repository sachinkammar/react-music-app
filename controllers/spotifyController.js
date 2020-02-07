var rest = require('restler');
var SpotifyWebApi = require('spotify-web-api-node');
var spotify = require('../models/spotifyTable');
var constants = require('../lib/constants')
module.exports.authorize = function(req, res) {
	console.log("called authorize")
	var my_client_id = '345d383f8f774706b6ba416295f26849';
	var redirect_uri = 'http://localhost:5000/api/spotify/callback'
	var scopes = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize' +
	  '?response_type=code' +
	  '&client_id=' + my_client_id +
	  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
	  '&redirect_uri=' + encodeURIComponent(redirect_uri));
}

module.exports.callback = function(req, res) {
	console.log("called callback");
	var client_secret = '0ea82efed6334a98930372365439aae4';
	var client_id = '345d383f8f774706b6ba416295f26849';
	
	var data = {}
	data.grant_type = 'client_credentials';
	data.code = req.query.code;
	data.redirect_uri = 'localhost:5000/'
	
	rest.post('https://accounts.spotify.com/api/token', {
	data: data,
	headers: {
		Authorization:
		'Basic ' +
		new Buffer(client_id + ':' + client_secret).toString('base64')
	}
	}).on('complete', function(data, response) {
		// you can get at the raw response like this...
		console.log("response","data",data)
		res.cookie("access_token", data.access_token, { httpOnly: true });
		res.redirect("http://localhost:3000/")
	});
}

module.exports.getAccessToken = function(req, res) {
	console.log("called access token")
	spotify.getAccessToken(req,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}

module.exports.getNewReleases = function(req, res) {
	console.log("called getNewReleases")
	spotify.getNewReleases(req,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}

module.exports.getFeaturedPlaylists = function(req, res) {
	console.log("called getFeaturedPlaylists")
	spotify.getFeaturedPlaylists(req,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}

module.exports.getTopCharts = function(req, res) {
	console.log("called getTopCharts")
	spotify.getTopCharts(req,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}
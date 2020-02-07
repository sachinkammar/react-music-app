const express = require('express');
var router = express.Router();
var spotify = require('../controllers/spotifyController');

router
	.route('/callback')
		.get(spotify.callback)

router	
	.route('/authorize')
		.get(spotify.authorize)

router	
	.route('/access_token')
		.get(spotify.getAccessToken)

router	
	.route('/get-new-releases')
		.get(spotify.getNewReleases)

router	
	.route('/get-featured-playlists')
		.get(spotify.getFeaturedPlaylists)

router	
	.route('/get-top-charts')
		.get(spotify.getTopCharts)
module.exports = router;

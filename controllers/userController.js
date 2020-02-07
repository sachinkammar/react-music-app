var user = require('../models/userTable');
var constants = require('../lib/constants');

module.exports.postUser = function(req, res) {
	var data=req.body;
	user.createUser(data,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}

module.exports.authenticateUser = function(req, res) {
	var data=req.body;
	user.authenticateUser(data,function(err,msg){
		if(err){
			res.status(constants.FOUR_HUNDRED).json({success:false,message:err});
		}else{
			res.status(constants.TWO_HUNDRED).json({success:true,message:msg});
		}
	});
}
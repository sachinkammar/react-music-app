
var User = require('./user');

module.exports = {
  createUser: createUser,
  authenticateUser:authenticateUser
}

function createUser(data,callback){
  User.create({
    username:data.username,
    email:data.email,
    password:data.password,
    type:data.type,
    contactNumber:data.contactNumber
  },function(err,res){
    if(err){
      callback(err,null)
    }else{
      callback(null,res)
    }
  })
}

function authenticateUser(data,callback){
  const username = data.username;
  const password = data.password;
  User.findOne({username}, function(err, res) {
    if (err) {
      callback(err,null)
    } else if (res){
      if(password==res.password){
        callback(null,{"success":true,res})
      } else {
        callback(null,{"success":false,"msg":"Incorrect password"})
      }
    } else {
      callback(null,{"success":false,"msg":"Incorrect username"})
    }
  })
}
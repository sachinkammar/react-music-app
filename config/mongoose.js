//Mongoose Config
const mongoose = require('mongoose')

mongoose.connect('mongodb://'+'localhost'+':'+'27017'+'/'+'music-it',{ 
  poolSize: 5,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
  useNewUrlParser: true ,
}, function(err){
  if(err) console.log(err);
  mongoose.Promise = global.Promise;
  console.log('DB Connection Established');
})

module.exports = mongoose.connection;
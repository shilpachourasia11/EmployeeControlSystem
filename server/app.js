let express = require('express')
let app = express()
let db=require('./sqldb')
let config = require('./config/environment');
console.log(db.connection)
require('./config/express')(app)
require('./routes/route.js')(app)

function startServer() {
	app.listen(config.port, config.ip, function() {
		console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
	});
}

db.connection.sync().then(() => {
	// if( config.seedDb){
	// 	console.log("DB CREATED")
	// 	console.log("Seeding databse--------------------->");
 // 		return require("./seed")();
	// }
})
.then(() => {
	startServer()
})
.catch((err) => {
	console.log("Server failed to start due to error: ", err);
})
exports = module.exports = app

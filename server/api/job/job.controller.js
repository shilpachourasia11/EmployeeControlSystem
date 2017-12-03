var db=require('./../../sqldb');
var job = require('./job.model.js')();

var jobHandler = {
	getJobTypes: (req, res)=>{
		job.getJobTypes(db, req)
		.then((data) =>{
        res.status(200).send(data)
		})
		.catch((err) =>{
			res.status(500).send({
          message:'Internal Server Error'
      })
		})
	},
}

module.exports = jobHandler;

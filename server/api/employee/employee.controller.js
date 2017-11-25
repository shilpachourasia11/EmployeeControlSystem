var db=require('./../../sqldb')();
var workSpace = require('./workSpace.model.js')();

var workSpaceHandler = {
	getAllWorkspaces: (req, res)=>{
		workSpace.getAllWorkspaces(db, req)
		.then((data) =>{
        res.status(200).send(data)
		})
		.catch((err) =>{
			res.status(500).send({
          message:'Internal Server Error'
      })
		})
	},
	changeAvailability: (req, res) => {
		if(req.body){
			workSpace.changeAvailability(db, req)
			.then((data) =>{
				res.status(200).send(req.body)
			})
			.catch((err) =>{
				res.status(500).send({
					message:'Internal Server Error'
				})
			})
		}
		else {
			res.status(400).send({
				message:'Bad Request'
			})
		}
	}
}

module.exports = workSpaceHandler;

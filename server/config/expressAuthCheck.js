const jwt = require('jsonwebtoken');
let userDetail= require('./../api/userDetail/userDetail.model')();
let config= require('./');
let models  = require('./../sqldb')();

/**
 *  The Auth Checker middleware function.
 */
 module.exports = (req, res, next)=> {;
 	if (!req.headers.authorization) {
 		console.log("Error auth check: Empty header")
    	return res.status(401).end();
 }

// get the last part from a authorization header string like "bearer token-value"
 	const token = req.headers.authorization.split(' ')[1];

// decode the token using a secret key-phrase
	return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    	if (err) {
    		console.log("Error auth check ", err);
    		return res.status(401).end();
    	}

		const userId = decoded.sub;

		 // check if a user exists
		return userDetail.findUserById(models, userId, (userErr, user) => {
		    if (userErr || !user) {
		    	console.log("No user exists");
		    	return res.status(401).end();
		    }
		console.log("Succesfull auth check");
		req.user= user;
		return next();
		});
	})
};
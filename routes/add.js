var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var addName = req.query.name;
	var addDesc = req.query.description;

	var toAdd = {

		"name": addName,
		"description": addDesc,
		"imageURL": "http://lorempixel.com/400/400/people"

	};
	console.log(toAdd);
	data.friends.push(toAdd);
	res.render("index.handlebars",data);
 }
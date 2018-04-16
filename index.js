exports.printMsg = function() {
  console.log("This is a message from the demo package version #9");
}

exports.prettify = function ( object ) {
		return JSON.parse(JSON.stringify(object));
}

function prettify( object ) {
	return JSON.parse(JSON.stringify(object));
}

exports.printify = function ( object ) {
		console.dir(prettify(object), {depth: null, colors: true});
}



/*
exports.printMsg = function() {
  console.log("This is a message from the demo package !");
}
*/


/*
module.exports = {
	prettify: function ( object ) {
		return JSON.parse(JSON.stringify(object));
	},

	printify: function ( object ) {
		console.dir(prettify(object), {depth: null, colors: true})
	}

	printMsg:  function() {
  		console.log("This is a message from the demo package !");
	}		  
}
*/



var express = require('express');
var request = require('request');
var bodyParser = require('body-parser')
var router = express.Router();
require('events').EventEmitter.defaultMaxListeners = Infinity;

/* GET home page. */
router.get('/', function(req, res, next) {

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " @ "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();

	res.render('index', 
		{
			title: 'Express', 
			todaydate: datetime 
		}
	);

});

router.post('/testrequest', function(req, res){
	//Tell the request that we want to fetch youtube.com, send the results to a callback function
	var uri = req.headers.url;
	console.log(uri);

	request(uri, function (error, response, body) {

  		if (!error && response.statusCode == 200) {
    		console.log(body) // Show the HTML for the Google homepage.
			res.status(200);
		    res.send('we good');	    		
  		}

	});
});



// <script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDFd5RSehK890o55wXyf2UwGxBAu-hSoiI",
//     authDomain: "newsyoucanlose.firebaseapp.com",
//     databaseURL: "https://newsyoucanlose.firebaseio.com",
//     storageBucket: "newsyoucanlose.appspot.com",
//     messagingSenderId: "338410298978"
//   };
//   firebase.initializeApp(config);
// </script>


module.exports = router;

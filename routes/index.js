var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {



  res.render('index', { title: 'Express', todaydate: 'this is todays date' });
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

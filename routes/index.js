
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Aditya weds Nidhi' });
};

exports.submitGuestbook = function(req, res){
  var data = req.body;
  console.log(data);
  var name = data.guestName
  var email = data.guestEmail
  var message = data.guestMessage 
  var db = require('./database.js');
  var result = db.insertGuestbookRecord(name, email, message, function(result, err){
    if(err == null) {
    	res.send(200, {"id": result})
    } else {
    	res.send(500, {"exception": err})
    }
    res.send(200);
  })	
};

exports.getGuestbookRecords = function(req, res) {
	var db = require('./database.js');
	var result = db.getGuestbookRecords(function(result) {
		console.log(result)
		res.render('getGuestbookRecords', { "result" : result })
	})
}

exports.getGallery = function(req, res) {
	res.render('gallery')
}


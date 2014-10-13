
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Aditya weds Nidhi' });
};

exports.submitGuestbook = function(req, res){
  var data = req.body;
  console.log(data);
  var name = data.guest-name
  var email = data.guest-email
  var message = data.guest-message 
  var db = require('./database.js');
  var result = db.insertGuestbookRecord(name, email, message, function(){
        res.send(200);
    })
  res.send(200);
};


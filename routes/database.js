var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'adinidhi',
  password : 'adinidhi',
  database : 'adinidhiwedding',
  port: '3306'
});

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
 
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
 
var MyDate = new Date();
MyDate.toMysqlFormat(); //return MySQL Datetime format


function insertGuestbookRecord(name, email, message) {
	var insertData = {
		name: name,
		emai: email,
		message: message,
		datetime: new Date().toMysqlFormat()
	}
	pool.getConnection(function(err, connection) {
		connection.query('INSERT INTO guestbook SET ?', insertData, function(err, result) {
			if(err)	throw err;
			connection.release();
		});
	});	
}
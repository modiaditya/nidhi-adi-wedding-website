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


module.exports.insertGuestbookRecord = function(name, email, message, callback) {
	var insertData = {
		name: name,
		email: email,
		message: message,
		datetime: new Date().toMysqlFormat()
	}
	console.log(insertData)
	pool.getConnection(function(err, connection) {
		connection.query('INSERT INTO guestbook SET ?', insertData, function(err, result) {
			if(err)	callback(null, err)
			else callback(result.id, null)
			connection.release();
		});
	});	
}

module.exports.getGuestbookRecords = function(callback) {
	pool.getConnection(function(err, connection) {
		connection.query('SELECT name, message, CONCAT(MONTHNAME(datetime), " ", DAYOFMONTH(datetime), ", ", YEAR(datetime)) AS date  FROM guestbook', function(err, result) {
			if(err)	throw err;
			else {
				//console.log(result.latitude);
				callback(result);
			}
			connection.release();
		});
	});
}
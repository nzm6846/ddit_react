var mysql = require('mysql'); 

var conn = mysql.createConnection({
  host : 'localhost',  
  user : 'root',
  password : 'react',
  database : 'react',
  port :3305
}); 

conn.connect(); 

var sql = `
	update emp
	set
		e_name = '6',
		gen = '6',
		addr = '6'
	where
		e_id = '3'

`;

conn.query(sql, function(err,rows, fields){
	console.log("err",err);
	console.log("rows",rows.affectedRows);
	console.log("fields",fields);
});


conn.end(); 




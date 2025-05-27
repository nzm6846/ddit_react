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
	delete from emp
	where
		e_id = '3'

`;

conn.query(sql, function(err,rows, fields){
	console.log("rows",rows.affectedRows);
});


conn.end(); 




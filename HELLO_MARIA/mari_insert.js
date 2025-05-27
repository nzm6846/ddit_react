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
	INSERT INTO emp
		(e_id,e_name,gen,addr)
	VALUES
		('3','3','3','3')
`;

conn.query(sql, function(err,rows, fields){
	console.log("err",err);
	console.log("rows",rows.affectedRows);
	console.log("fields",fields);
});


conn.end(); 




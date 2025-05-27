const mysql = require('sync-mysql');

const conn = new mysql({
	host: 'localhost',
	user: 'root',
	password: 'react',
	database: 'react',
	port : 3305
});

var sql = `
	INSERT INTO emp
		(e_id,e_name,gen,addr)
	VALUES
		('3','3','3','3')
`;
const results = conn.query(sql);

console.log('results:', results.affectedRows);

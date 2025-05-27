const mysql = require('sync-mysql');

const conn = new mysql({
	host: 'localhost',
	user: 'root',
	password: 'react',
	database: 'react',
	port : 3305
});

var sql = `
	update emp
	set
		e_name = '6',
		gen = '6',
		addr = '6'
	where
		e_id = '3'
`;
const results = conn.query(sql);

console.log('results:', results.affectedRows);

const mysql = require('sync-mysql');

const conn = new mysql({
	host: 'localhost',
	user: 'root',
	password: 'react',
	database: 'react',
	port : 3305
});

var sql = `
	select 
		e_id,e_name,gen,addr
	from 
		emp
`;
const results = conn.query(sql);

console.log('results:', results);

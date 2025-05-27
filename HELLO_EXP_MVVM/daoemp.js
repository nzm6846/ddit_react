const mysql = require('sync-mysql');

class DaoEmp {
	constructor() {
		this.conn = new mysql({
			host: 'localhost',
			user: 'root',
			password: 'react',
			database: 'react',
			port : 3305
		});
	}

	selectList() {
		var sql = `
			select 
				e_id,e_name,gen,addr
			from 
				emp
		`;
		const list = this.conn.query(sql);
		return list
	}
	selectOne(e_id){
		var sql = `
			select 
				e_id,e_name,gen,addr
			from 
				emp
			where
				e_id = '${e_id}'
		`;
		const list = this.conn.query(sql);
		return list[0]
	}
	insert(vo){
		var sql = `
			INSERT INTO emp
				(e_id,e_name,gen,addr)
			VALUES
				('${vo.e_id}','${vo.e_name}','${vo.gen}','${vo.addr}')
		`;
		const result = this.conn.query(sql);
		return result.affectedRows
	}
	
	update(vo){
		var sql = `
			update emp
			set
				e_name = '${vo.e_name}',
				gen = '${vo.gen}',
				addr = '${vo.addr}'
			where
				e_id = '${vo.e_id}'
		`;
		const result = this.conn.query(sql);
		return result.affectedRows
	}
	
	delete(e_id){
		var sql = `
			delete from emp
			where
				e_id = '${e_id}'
		`;
		const result = this.conn.query(sql);
		return result.affectedRows
	}
	
}

module.exports = DaoEmp;



if (require.main === module) {
	const de = new DaoEmp();
	let cnt = de.delete('3');
	console.log("cnt",cnt);

}












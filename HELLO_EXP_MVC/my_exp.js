const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const DaoEmp = require('./daoemp');

const de = new DaoEmp();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.redirect("/emp_list.do")
	//res.send('Hello ChaEunWoo');
});

app.get('/emp_list.do', (req, res) => {
	let mylist = de.selectList();
	res.render('emp_list.html',{mylist:mylist} );
});

app.get('/emp_detail.do', (req, res) => {
	const e_id = req.query.e_id;
	console.log(e_id);
	let vo = de.selectOne(e_id);
	console.log(vo);
	res.render('emp_detail.html',{vo:vo}  );
});


app.get('/emp_mod.do', (req, res) => {
	const e_id = req.query.e_id;
	console.log(e_id);
	let vo = de.selectOne(e_id);
	console.log(vo);
	res.render('emp_mod.html',{vo:vo}  );
});

app.post('/emp_mod_act.do', (req, res) => {
	const e_id = req.body.e_id;
	const e_name = req.body.e_name;
	const gen = req.body.gen;
	const addr = req.body.addr;
	let vo = {'e_id':e_id,'e_name':e_name,'gen':gen,'addr':addr};
	let cnt = de.update(vo);
	
	res.render('emp_mod_act.html',{cnt:cnt});
});


app.get('/emp_add.do', (req, res) => {
	res.render('emp_add.html' );
});


app.post('/emp_add_act.do', (req, res) => {
	const e_id = req.body.e_id;
	const e_name = req.body.e_name;
	const gen = req.body.gen;
	const addr = req.body.addr;
	let vo = {'e_id':e_id,'e_name':e_name,'gen':gen,'addr':addr};
	let cnt = de.insert(vo);
	
	res.render('emp_add_act.html',{cnt:cnt});
});


app.post('/emp_del_act.do', (req, res) => {
	const e_id = req.body.e_id;
	let cnt = de.delete(e_id);
	
	res.render('emp_del_act.html',{cnt:cnt});
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
















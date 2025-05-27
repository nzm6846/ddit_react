const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DaoEmp = require('./daoemp');


const de = new DaoEmp();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello ChaEunWoo');
});

app.get('/emp_list.ajax', (req, res) => {
	//console.log(req);
	//console.log(req.body.params.menu);
	//console.log(req.query.menu);
	let list = de.selectList();
	console.log(list);
	res.json({ list: list });
});


app.get('/emp_detail.ajax', (req, res) => {
	console.log(req.query.e_id);
	let e_id = req.query.e_id;
	let vo = de.selectOne(e_id);
	res.json({ vo: vo });
});

app.post('/emp_mod.ajax', (req, res) => {
	console.log(req.body.params);
	let vo = req.body.params;
	let cnt = de.update(vo);
	
	res.json({ cnt: cnt });
	
	
});

app.post('/emp_add.ajax', (req, res) => {
	console.log(req.body.params);
	let vo = req.body.params;
	let cnt = de.insert(vo);
	
	res.json({ cnt: cnt });
	
});

app.post('/emp_del.ajax', (req, res) => {
	console.log(req.body.params);
	let e_id = req.body.params.e_id;
	let cnt = de.delete(e_id);
	
	res.json({ cnt: cnt });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
















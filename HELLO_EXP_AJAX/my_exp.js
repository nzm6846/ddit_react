const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.redirect("/index.do")
});

app.get('/index.do', (req, res) => {
	res.render('index.html');
});


app.post('/jquery.ajax', (req, res) => {
	console.log(req.body.menu);
	//console.log(req.query.menu);
	res.json({ message: 'HELLO KARINA' });
});

app.post('/axios.ajax', (req, res) => {
	console.log(req);
	console.log(req.body.params.menu);
	//console.log(req.query.menu);
	res.json({ message: 'HELLO WINTER' });
});

app.get('/fetch.ajax', (req, res) => {
	console.log(req.query.menu);
	//console.log(req.body.menu);
	res.json({ message: 'HELLO NINGNING' });
});

app.get('/one.ajax', (req, res) => {
	res.json({ cnt: 1 });
});

app.get('/two.ajax', (req, res) => {
	res.json({ cnt: 2 });
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
















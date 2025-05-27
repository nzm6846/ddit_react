const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

// .html 파일을 ejs 엔진으로 렌더링할 수 있도록 설정
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));  // views 폴더 사용

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  	res.redirect('/index.do');
});


app.get('/index.do', (req, res) => {
  	res.render('index.html');
});


app.post('/jquery.ajax', (req, res) => {

	const menu = req.body.menu;
	console.log(menu);
	
  	res.json({ message: 'hello' });
});

app.post('/axios.ajax', (req, res) => {
	
	const menu = req.body.params.menu;
	console.log(menu);
	
  	res.json({ message: 'hello winter' });
});

app.post('/fetch.ajax', (req, res) => {
	console.log(req);
	const menu = req.body.menu;
	console.log(menu);
	
  	res.json({ message: 'hello ningning' });
});

app.get('/one.ajax', (req, res) => {
	
  	res.json({ cnt: 1 });
});

app.get('/two.ajax', (req, res) => {
	
  	res.json({ cnt: 2 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
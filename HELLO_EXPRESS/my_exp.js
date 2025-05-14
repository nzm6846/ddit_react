const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('차은우')
})
app.get('/param', (req, res) => {
	var menu = req.query.menu;
	console.log(menu);
  	res.send('PARAM: '+ menu);
})

app.use(bodyParser.urlencoded({ extended: false })); // 폼 데이터 (application/x-www-form-urlencoded)
app.use(bodyParser.json()); // JSON 데이터 (application/json)

app.post('/post', (req, res) => {
	var menu = req.body.menu;

  	res.send('POST' + menu);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
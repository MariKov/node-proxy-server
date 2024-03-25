require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routeMeteors = require('./delivery/routes/routes')

const app = express();
app.use(express.json())

nunjucks.configure('app/delivery/views', {
    express: app
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('', routeMeteors)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const routeMeteors = require('./delivery/routes/meteor_routes')

const app = express();
app.use(express.json())

nunjucks.configure('app/delivery/views', {
    express: app
});

app.use('', routeMeteors)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

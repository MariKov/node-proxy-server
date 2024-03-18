require('dotenv').config();
const express = require('express');
const routeMeteors = require('./delivery/routes/meteor_routes')

const app = express();

app.use('', routeMeteors)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

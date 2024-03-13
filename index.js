require('dotenv').config();
const Koa = require('koa');
const router = require('./routes.js');

const app = new Koa();

app.use(router.routes());
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

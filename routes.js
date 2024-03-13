const Router = require('koa-router');
const fetchAsteroids = require('./controller')

const router = new Router();

router.get('/hi', async (ctx) => {
    try {
        const startDate = ctx.query.start??"2000-12-20";
        const endDate = ctx.query.end??"2000-12-20";
        const asteroids = await fetchAsteroids(startDate, endDate);
        ctx.body = asteroids;
    } catch (error) {
        ctx.status = 500;
        ctx.body = "Error fetching responce from NASA";
    }
});

module.exports = router;
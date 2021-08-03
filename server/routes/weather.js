import express from 'express';

import { getCityWeather } from '../controllers/weather.js';

const router = express.Router();

// console.log("here weather.js", router);

router.get('/city/:city', getCityWeather);

// router.get('/city/:city', function(req, res) {
//     console.log("city is " + req.params.city);
//     res.send('(get) It worked. city is ' + req.params.city);
// });


// console.log("here weather.js 2", router);
//router.get('/', createPost);


export default router;
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;

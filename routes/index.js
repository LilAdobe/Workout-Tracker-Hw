const route = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

route.use('/api', apiRoutes);
route.use('/',htmlRoutes);


module.exports = router;


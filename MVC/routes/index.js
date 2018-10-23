const path = require("path");
const router = require('express').Router();
const adminRoutes = require('./admin');

// tell the application when to use these routes
router.use('/admin', userRoutes);
// router.use('/somethingelse', somethingElseRoutes);


// if no routes are hit, go to react app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/build'));
// });

module.exports = router;

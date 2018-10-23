const router = require('express').Router();
const adminController = require('../controllers/adminController');

// CRUD for an individual account
router.route('/:id')
    .post(adminController.create)
    .get(adminController.read)
    .put(adminController.update)
    .delete(adminController.delete)

// router.route('/')    
//     .post(adminController.erase)

// router.route('/account/new')    
//     .put(adminController.add)
    
module.exports = router;
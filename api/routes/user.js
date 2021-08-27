const router = require('express').Router();
const userHandler = require('../handlers/user')

router.post('/sign-up', userHandler.sign_up);
router.post('/login');
router.post('/delete-account');

module.exports = router;
const router = require('express').Router();
const userHandler = require('../handlers/user')

router.post('/sign-up', userHandler.sign_up);
router.post('/login',userHandler.log_in);
router.post('/delete-account');

module.exports = router;
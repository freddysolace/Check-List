const router = require('express').Router();
const contactHandler = require('../handlers/contact')


router.post('/#contact',contactHandler.send_message);


module.exports = router;
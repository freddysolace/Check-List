const router = require('express').Router();
const taskHandler = require('../handlers/task')

router.post('/create-task',taskHandler.hello_world);
router.patch('/update-task',taskHandler.hello_world);
router.post('/delete-task',taskHandler.hello_world);

module.exports = router;
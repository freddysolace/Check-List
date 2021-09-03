const router = require('express').Router();
const taskHandler = require('../handlers/task')


router.get('/add-task',taskHandler.show_page);
router.get('/user/add-task',taskHandler.redirect_page);
router.post('/create-task',taskHandler.create_task);
router.patch('/update-task',taskHandler.update_task);
router.post('/delete-task',taskHandler.delete_task);

module.exports = router;
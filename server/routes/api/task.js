const express = require('express');
const router = express.Router();
const task = require('../../Controller/Task');

router.post('/create', task.createTask);
router.get('/gettask', task.getTask);
router.get('/getalltask/:owner', task.getAllTask);
router.delete('/delete/:id', task.deleteTask);
router.put('/edit/:id', task.editTask);

module.exports = router;
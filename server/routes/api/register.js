const express = require('express');
const router = express.Router();
const account = require('../../Controller/Account');

router.get('/', function(req, res){
    res.sendStatus(404);
})
router.post('/', account.createAccount);

module.exports = router;

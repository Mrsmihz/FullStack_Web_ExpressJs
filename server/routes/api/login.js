const express = require('express');
const router = express.Router();
const account = require('../../Controller/Account');

router.get('/', account.getSession);

router.post('/', account.accountLogin);
module.exports = router;

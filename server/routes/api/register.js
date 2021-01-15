const express = require('express');
const router = express.Router();
const sql = require('./my_db');

router.get('/', function(req, res){

})
router.post('/', function(req, res){
    var stmt = 'insert into Accounts(first_name, last_name, username, password, email) values(?,?,?,?,?)';
    var data = JSON.parse(req.body.json);
    sql.query(stmt, [data.first_name, data.last_name, data.username, data.password, data.email], function(err, result){
        if (err){
            res.send('failed');
        }
        else{
            res.send('success');
        }
    })
})

module.exports = router;

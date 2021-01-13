const express = require('express');
const router = express.Router();
var sql = require('./my_db');

router.get('/', (req, res) => {
    var stmt = 'select * from person';
    sql.query(stmt, function(err, result){
        if (err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
});
router.post('/', function(req, res){
    var stmt = 'insert into person (first_name, last_name) values(?,?)';
    sql.query(stmt, [req.body.first_name, req.body.last_name], function(err, res){
        if (err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    })
})



module.exports = router;

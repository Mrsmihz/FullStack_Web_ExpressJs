const sql = require('./my_db');

exports.createTask = function(req, res){
    var stmt = "insert into Tasks(`title`, `desc`, owner) values(?,?,?)";
    var data = req.body.json;
    console.log(req.body.json);
    sql.query(stmt, [data.title, data.desc, data.owner], function(err, result){
        if (err){
            console.log(err);
            res.sendStatus(404);
        }
        else{
            res.sendStatus(201);
        }
    })
}

exports.editTask = function(req, res){
    var stmt = "update Tasks(title, desc) values(?,?) where id=?";
    var data = req.body.json;
    sql.query(stmt, [data.title, data.desc, data.id], function(err, result){
        if (err){
            res.send('FAIL');
        }
        else{
            res.send('OK');
        }
    })
}

exports.deleteTask = function(req, res){
    var stmt = "delete from Tasks where id=?";
    var data = req.body.json;
    sql.query(stmt, [data.id], function(err, result){
        if (err){
            res.send('FAIL');
        }
        else{
            res.send('OK');
        }
    })
}

exports.getTask = function(req, res){
    var stmt = "select (id, title, desc, owner) from Tasks where owner=? and id=?";
    var data = req.body.json;
    sql.query(stmt, [data.owner, data.id], function(err, result){
        if (err){
            res.sendStatus(404);
        }
        else{
            res.stauts(200).send(result);
        }
    })
}

exports.getAllTask = function(req, res){
    var stmt = "select * from Tasks where owner=?";
    var data = req.params;
    sql.query(stmt, [data.owner], function(err, result){
        if (err){
            res.send('FAIL');
        }
        else{
            res.send(result);
        }
    })
}
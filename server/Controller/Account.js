const express = require('express');
const sql = require('./my_db');
exports.createAccount = function(req, res){
    var stmt = 'insert into Accounts(first_name, last_name, username, password, email) values(?,?,?,?,?)';
    var data = JSON.parse(req.body.json);
    sql.query(stmt, [data.first_name, data.last_name, data.username, data.password, data.email], function(err, result){
        if (err){
            res.send('FAIL');
        }
        else{
            res.send('OK');
        }
    })
}

exports.accountLogin = function(req, res){
    var stmt = "select id, username, password, first_name, last_name, email from Accounts where username= ? ";
    var data = JSON.parse(req.body.json);
    sql.query(stmt, [data.username], function(err, result){
        if (err){
            res.send('FAIL');
        }
        else{
            var query = result[0];
            if (query.password === data.password){
                var newUser = {
                    id:query.id,
                    username:query.username,
                    password:query.password,
                    first_name:query.first_name,
                    last_name:query.last_name,
                    email:query.email
                };
                req.session.user = newUser;
                console.log(req.session.user);
                res.send('OK');
            }
            else{
                res.send('FAIL');
            }
        }
    })
}

exports.getSession = function(req, res){
    var store = req.sessionStore;
    var found = false;
    if (store.sessions){
        for (var sid in store.sessions){
            var ses = JSON.parse(store.sessions[sid]);
            if (ses.user){
                res.send(ses.user);
                found = true;
                break;
            }
        }
        if (!found){
            res.send('not found');
        }
    }
}

exports.userLogout = function(req, res){
    var store = req.sessionStore;
    if (store.sessions){
        for (var sid in store.sessions){
            store.destroy(sid, function(){
                console.log("deleted " + sid);
            });
        }
    }
}

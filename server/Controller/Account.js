const express = require('express');
const sql = require('./my_db');
exports.createAccount = function(req, res){
    var stmt = 'insert into Accounts(first_name, last_name, username, password, email) values(?,?,?,?,?)';
    var data = req.body.json;
    sql.query(stmt, [data.first_name, data.last_name, data.username, data.password, data.email], function(err, result){
        if (err){
            if (err.code == "ER_DUP_ENTRY"){
                res.sendStatus(409);
            }
            else{
                res.sendStatus(404);
            }
        }
        else{
            res.sendStatus(201);
        }
    })
}

exports.accountLogin = function(req, res){
    var stmt = "select id, username, password, first_name, last_name, email from Accounts where username= ? ";
    var data = req.body.json;
    sql.query(stmt, [data.username], function(err, result){
        if (err){
            res.sendStatus(404);
        }
        else{
            var query = result[0];
            if (query){
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
                    res.sendStatus(200);
                }
                else{
                    res.sendStatus(404);
                }
            }
            else{
                res.sendStatus(404);
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
                res.status(200).send(ses.user);
                found = true;
                break;
            }
        }
        if (!found){
            res.status(404).send('not found');
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

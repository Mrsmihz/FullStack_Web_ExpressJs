const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { MemoryStore } = require('express-session');


const app = express();
const sess = {
    secret:'doggo',
    store:new MemoryStore(),
    maxAge:3600000,
    resave:false,
    saveUninitialized:false,
    cookie:{}
}
sess.cookie.maxAge = 3600000;

app.use(session(sess));
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');
const register = require('./routes/api/register');
const login = require('./routes/api/login');
const task = require('./routes/api/task');

app.use('/api/task', task);
app.use('/api/posts', posts);
app.use('/api/register', register);
app.use('/api/login', login);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));

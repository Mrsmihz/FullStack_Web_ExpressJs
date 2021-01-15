const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');
const register = require('./routes/api/register');

app.use('/api/posts', posts);
app.use('/api/register', register);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));

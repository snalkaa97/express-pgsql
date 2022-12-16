const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;

const userRouter = require('./routes/user');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true })
);

app.listen(port, ()=>{
    console.log('App Running on port: http://localhost:' + port);
})

app.get('/', (req, res) => {
   res.json({info: 'Hello World!'});
})

app.use('/', userRouter);

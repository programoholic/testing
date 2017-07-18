const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(morgan('dev'));

app.get('/test',(req,res)=>{

    res.send('hi hello');
});
app.listen(3000);

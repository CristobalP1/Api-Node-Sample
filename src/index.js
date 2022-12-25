const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//cors
app.use(cors());

//settings
app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(require('./routes/index'));

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})
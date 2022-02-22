const express = require('express');
const { logger } = require('./log/logger');
const { authorize } = require('./middleware/authorize');
const app = express();
const morgan = require('morgan');



//express passes the necessary parameters
//Invokes for all routes below
//Location matters. If it is placed too low, it will not trigger
//Order of middleware in the array matters
// app.use([authorize, logger]);
app.use(morgan('tiny'));

//express built in middleware for setting a directory as public
// app.use(express.static('./public'));

//Invokes to all routes with anything that comes after path declared
// app.use('/api',logger);

//app.get
app.get('/', (req,res)=>{
    // console.log(req.user);
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});
//Invokes middleware for specific routes
// app.get('/', logger, (req,res)=>{
//     res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>');
// });
app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
});
app.get('/api/products',(req,res)=>{
    res.status(200).send('Api Products Page');
});
app.get('api/items',(req,res)=>{
    res.status(200).send('Api Items Page');
});

//Multiple middleware for specific routes
// app.get('api/items',[authorize, logger],(req,res)=>{
//     res.status(200).send('Api Items Page');
// });

//app.listen
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
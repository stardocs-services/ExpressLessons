const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.json());

//This is the basepath. That means there is no need to set this in the specific routes
app.use('/login',auth);
app.use('/api/people',people);


//app.listen
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
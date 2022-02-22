const express = require('express');
const app = express();

//app.get
app.get('/',(req,res)=>{
    console.log("User hit the resource");
    res.status(200).send('Home Page');
});
app.get('/about',(req,res)=>{
    console.log("User hit the resource");
    res.status(200).send('About Page');
});
//app.all
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not Found</h1>');
});
//app.listen
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
//app.post
//app.put
//app.delete
//app.use
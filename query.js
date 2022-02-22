const express = require('express');
const { products } = require('./data');
const app = express();

//app.get
app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});
app.get('/api/products',(req,res)=>{
    const allProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(allProducts);
});
app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params);
    const {productId} = req.params;
    console.log({productId});
    const singleProduct = products.find((product)=> product.id === Number(productId));
    if(!singleProduct){
        return res.status(404).send('Product does not exist');
    }
    res.json(singleProduct);
});
//Gets any query string parameters
//Example: http://localhost:5000/api/v1/query?name=Amos
// app.get('/api/v1/query',(req,res)=>{
//     console.log(req.query);
//     res.send("Hello World");
// });
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    let sortedProducts = products;
    const {search,limit} = req.query;
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length<1){
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts);
});
app.get('/about',(req,res)=>{
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
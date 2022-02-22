const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.json());
app.get('/api/people',(req,res)=>{
    res.status(200).json({
        success: true,
        data: people
    });
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    const { name } = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
  
    res.status(401).send('Please Provide Credentials')
});

app.post('/api/people/addname',(req,res)=>{
    console.log(req.body);
    const { name } = req.body
    if (!name) {
      return res.status(400).send({
          success:false,
          message:"Please provide a name"
      });
    }
    res.status(200).send({
        success:true,
        data:[...people, name]
    });
});

//For editing the data
//Is idempotent meaning many request will be treated as 1
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id === Number(id));
    if(!person){
        return res.status(404).send({
            success:false,
            message:`Person not found with id ${id}`
        });
    }
    const newPerson = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(200).send({
        success:true,
        data:newPerson
    });

});

app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const person = people.find((person)=>person.id === Number(id));
    if(!person){
        return res.status(404).send({
            success:false,
            message:`Person not found with id ${id}`
        });
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(id)
    )
    res.status(200).send({
        success:true,
        message:`Person ${person.name} deleted`,
        data: newPeople
    });

});

//app.listen
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
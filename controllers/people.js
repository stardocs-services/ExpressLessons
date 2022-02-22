
let {people} = require('../data');


const getPeople = (req,res)=>{
    res.status(200).json({
        success: true,
        data: people
    });
};

const createPerson = (req,res)=>{
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
};

const updatePerson = (req,res)=>{
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

}

const deletePerson = (req,res)=>{
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

}


module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
}
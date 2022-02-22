const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people');

// router.get('/',getPeople);
// router.post('/create',createPerson);
// //For editing the data
// //Is idempotent meaning many request will be treated as 1
// router.put('/:id',updatePerson);
// router.delete('/:id',deletePerson);

//Combining by similarities
router.route('/').get(getPeople)
router.route('/create').post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
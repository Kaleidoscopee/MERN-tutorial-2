const express = require('express')
const router = express.Router()
const { getGoals,setGoal,updateGoal,deleteGoal } = require('../controllers/goalController') //importing routes from goalController.js

//ROUTES // all 4 routes abstracted out to goalController
// GET route (The R in CRUD(Read)) 
router.get('/', getGoals)
// POST route (The C in CRUD(Create))
router.post('/', setGoal)
// PUT route (The U in CRUD(Updatee))
router.put('/:id', updateGoal)
// Delete route (The D in CRUD(Delete))
router.delete('/:id', deleteGoal)




module.exports = router
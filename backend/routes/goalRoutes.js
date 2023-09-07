const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')

//ROUTES
// get route (The R in CRUD(Read))
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get goals' })          
})
// post route (The C in CRUD(Create))
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set goals' })
})
// put route (The U in CRUD(Updatee))
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})
// delete route (The D in CRUD(Delete))
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})




module.exports = router
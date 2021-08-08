const express = require('express');
const router = express.Router();
const Menu = require('../models/menu')
const Meal = require('../models/meal')

router.get('/', async(req, res) => {
    const menus = await Menu.find({})    
    res.send(menus);
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const menu = await Menu.findById(id)
    .populate({
        path: 'meals',
    })
    res.send(menu)
})

module.exports = router;
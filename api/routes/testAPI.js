const express = require('express');
const router = express.Router();
const Menu = require('../models/menu')

router.get('/', async(req, res) => {
    const menus = await Menu.find({})
    res.send(menus);
});

module.exports = router;
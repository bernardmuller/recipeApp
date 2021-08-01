const express = require('express');
const router = express.Router();
const Meal = require('../models/meal')

const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

router.get('/', async(req, res) => {
    const response = await notion.databases.query({ 
        database_id: process.env.NOTION_DATABASE_ID
        })
    const menus = response.results
    const menu_IDs = []
    const pages = []
    for(let i=0; i < menus.length; i++) {
        menu_IDs.push(menus[i].id)              
    }
    // for(let j=0; j < menu_IDs; j++) {
    //     const page = await notion.pages.retrieve({
    //         page_id: menu_IDs[j]
    //     })
    //     pages.push(page)
    // }

    const page = await notion.pages.retrieve({ 
        page_id: menu_IDs[0]
    })
    console.log('Notion Response:')
    console.log(page.id)
    res.send(page)
});

module.exports = router;
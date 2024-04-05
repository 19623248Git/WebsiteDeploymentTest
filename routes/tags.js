const express = require('express')
const fs = require('fs')
const router = express.Router()

let jsondata;

fs.readFile (('./data.json'), 'utf8', (err,json) =>{
    if (err) throw err;
    jsondata = JSON.parse(json);
    console.log('Got Data');
})

router.get("/" , (req, res) => {
    res.render('Links', {"links": jsondata});
})

router.get("/:id" , (req, res) => {
    const id = parseInt(req.params.id)
    res.render("temp", {"name": jsondata[id - 1].name , "description": jsondata[id - 1].description})    
})

module.exports = router
const place = require('express').Router()


// INDEX
place.get('/', (req, res) => {
    res.render("places/index")
})

// NEW
place.get("/new", (req, res) => {
    res.render("new");
})

//EDIT
place.get('/:indexArrray/edit', (req, res) => {
    res.render('edit', {
        place: place[req.params.indexArrray]
    })
})
module.exports = place

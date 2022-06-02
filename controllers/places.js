const router = require('express').Router()
const place = express.Router();

// INDEX
place.get('/', (req, res) =>{
    res.send('GET /places')
})

// NEW
place.get("/new", (req, res) => {
    res.render("new");
})


module.exports = router

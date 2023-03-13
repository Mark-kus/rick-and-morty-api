const { Router } = require('express');
const router = Router();

const getCharById = require('../controllers/getCharById.js')
const getCharDetail = require('../controllers/getCharDetail.js')

const favs = require('../utils/favs.js')

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.get('/rickandmorty/fav', (req, res) => {
    res.json(favs);
})

router.post('/rickandmorty/fav', (req, res) => {
    const personaje = req.body;
    favs.push(personaje);
    res.status(300).json({ success: true });
})

router.delete('/rickandmorty/fav/:id', (req, res) => {
    favs.filter(el => { el.id !== req.params.id })
    res.status(300).json({ success: true });
})

module.exports = router;
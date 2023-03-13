const axios = require('axios')

const getCharById = (req, res) => {
    const { id } = req.params;
    const URL = `${process.env.URL_BASE}/character/${id}?key=${process.env.API_KEY}`
    axios.get(URL)
        .then(response => response.data)
        // Realmente solo hacen falta algunos datos, no todos
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species
            }
            res.status(200).json(character)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

module.exports = getCharById;
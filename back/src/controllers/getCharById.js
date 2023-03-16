const axios = require('axios')

const getCharById = async (req, res) => {
    const { id } = req.params;
    const URL = `${process.env.URL_BASE}/character/${id}?key=${process.env.API_KEY}`

    try {
        const response = await axios(URL);
        const data = response.data;
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            episode: data.episode,
            origin: data.origin,
        }
        res.json(character)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getCharById;
const axios = require("axios");

const getCharDetail = async (req, res) => {
    const params = req.params;
    const URL = `https://rickandmortyapi.com/api/episode/${params.id}`

    try {
        const response = await axios(URL);
        const character = response.data
        res.json(character)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getCharDetail;
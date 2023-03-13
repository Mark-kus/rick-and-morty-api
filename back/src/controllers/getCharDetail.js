const getCharDetail = (req, res) => {
    const params = req.params;
    const URL = `${params.id}?key=${process.env.API_KEY}`
    console.log(URL)
    fetch(URL)
        .then(response => response.json())
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ error: err.message }))
}

module.exports = getCharDetail;
const { Router } = require("express");
const router = Router();
let favs = require("../utils/favs.js");

const getCharById = require("../controllers/getCharById.js");
const getCharDetail = require("../controllers/getCharDetail.js");

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.get("/favorite", (req, res) => {
  res.status(200).json(favs);
});

router.post("/favorite", (req, res) => {
  const personaje = req.body;
  favs.push(personaje);
  res.status(200).json(favs);
});

router.delete("/favorite/:id", (req, res) => {
  favs = favs.filter((el) => el.id !== Number(req.params.id));
  res.status(200).json(favs);
});

module.exports = router;

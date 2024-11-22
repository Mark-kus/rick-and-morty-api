require("dotenv").config();
const router = require("./src/routes/index.js");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use((req, res, next) => {
  // Esto debe ser reemplazado por * para el deploy
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", router);
app.use(express.static(path.join(__dirname, "../../", "front/dist")));

// Para que sirva la build al recargar una ruta
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "front/dist", "index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server raised in port " + (process.env.PORT || 3001));
});

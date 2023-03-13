require('dotenv').config();
const router = require('./routes/index.js');
const express = require('express');
const app = express()
const PORT = 3001;
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use('/', router);

app.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
})
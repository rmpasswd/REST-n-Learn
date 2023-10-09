const express = require('express');
const bodyParser = require('bodyParser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.status(200).send({"msg": "uncle-cousin"})
});

app.listen(4000);
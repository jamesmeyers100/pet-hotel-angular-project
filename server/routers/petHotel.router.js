const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

router.post('/', (req, res) => {
    console.log('in POST on router', req.body);
    const newPet = req.body;
    const queryText = `INSERT INTO pet ("name", "breed", "color", "is_checked_in") 
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newPet.name, newPet.breed, newPet.color, newPet.is_checked_in])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('ERROR ADDING pet - POST router -', error);
            res.sendStatus(500);
        });
});
module.exports = router;


const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

router.post('/', (req, res) => {
    console.log('in POST on manage.router', req.body);
    const newOwner = req.body;
    const queryText = `INSERT INTO owner ("first_name", "last_name") 
                       VALUES ($1, $2);`;
    pool.query(queryText, [newOwner.first_name, newOwner.last_name])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('ERROR ADDING pet - POST router -', error);
            res.sendStatus(500);
        });
});
module.exports = router;
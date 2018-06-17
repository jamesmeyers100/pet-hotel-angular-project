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

// GETowner
router.get('/', function(req, res){
    console.log('in petHotelGET');

    const queryText = `SELECT owner.first_name as owner, owner.id, count(pet.id) FROM owner
    LEFT JOIN pet ON owner.id = pet.owner_id
    GROUP BY owner.id;`;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch(function(err){
        console.log('Error in GET search', err); 
    });
});

// deleteOwner
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('In ownerDELETE router');
    const queryText = 'DELETE FROM owner WHERE id=$1';
    pool.query(queryText, [id])
      .then((results)=>{
        console.log('Successfully deleted');
        
        res.sendStatus(200);
      }).catch((err)=>{
        console.log('Error', err);
        res.sendStatus(500);
      })
  });
module.exports = router;
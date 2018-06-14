const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('server/public'));
app.use(bodyParser.json());

const petHotelRouter = require('./routers/petHotel.router');
app.use('/pethotel', petHotelRouter);

const port = process.env.PORT || 3000;
app.listen(port, function (req, res) {
    console.log('Listening on port', port);
  });




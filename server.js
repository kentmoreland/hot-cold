const express = require("express");
const bodyParser = require('body-parser');

app = express();

const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/client`));


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });



app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports.app = app;
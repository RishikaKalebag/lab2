const express = require('express');
const app = express();
const hostname = 'localhost'
const port = '3038'
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Implementation of route')
  })
  
  app.get('/test2', function (req, res) {
    res.sendFile(__dirname+"/"+"music.html")
  })
  
  
  
  app.listen(port, hostname, () => {
      console.log(`Express app listening at http://${hostname}:${port}/`);
  });
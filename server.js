const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/project'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/project/index.html'));
})

app.listen(port, () => {
  console.log(`Server listen on port number ${port}`)
})

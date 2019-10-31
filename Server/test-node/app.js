const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.get('/potato', (req, res) => {
  let html = 
  `
  <p>
    The request<br>
    ${req.header}
  </p>
  <p>
    And here's a potato.
  </p>
  `
  console.log('will send html');
  res.send(html);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
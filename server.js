const express = require('express');
const fs = require('fs');

const read = fs.readFileSync;
const app = express();

app.use(express.static('views'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.send(read('./views/home.html', 'utf8'));
});

// TODO: implement search across users and interests
app.get('/search', (req, res) => {
  res.send({});
});

app.get('/profile/:id', (req, res) => {
  res.send(read('./views/profile.html', 'utf8'));
});

const server = app.listen(process.env.PORT || 5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Website server listening at http://${host}:${port}`);
});

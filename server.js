const express = require('express');
const fs = require('fs');

const read = fs.readFileSync;
const app = express();

const SearchService = require('./server/services/search-service');

app.use(express.static('views'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.send(read('./views/home.html', 'utf8'));
});

// TODO: implement search across users and interests
app.get('/search', (req, res) => {
  SearchService.search(req.query.q, (err, users) => {
    if (err) return console.error(err);

    res.send(users);
  });
});

const server = app.listen(process.env.PORT || 5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Website server listening at http://${host}:${port}`);
});

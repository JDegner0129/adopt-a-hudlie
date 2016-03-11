const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const read = fs.readFileSync;
const app = express();

const SearchService = require('./server/services/search-service');
const UserService = require('./server/services/user-service');

app.use(bodyParser.json());

app.use(express.static('views'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.send(read('./views/home.html', 'utf8'));
});

app.get('/api/v1/search', (req, res) => {
  SearchService.search(req.query.q, (err, users) => {
    if (err) return console.error(err);

    res.send(users);
  });
});

app.get('/api/v1/users/:id', (req, res) => {
  UserService.getUser(req.params.id, (err, user) => {
    if (err) return console.error(err);

    res.send(user);
  });
});

app.post('/api/v1/users', (req, res) => {
  const userInfo = {
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    email: req.body.email,
    interests: req.body.interests,
  };

  UserService.createUser(userInfo, (err, user) => {
    if (err) return console.error(err);

    res.send(user);
  });
});

app.post('/api/v1/users/:id', (req, res) => {
  const userInfo = {
    _id: req.body._id || req.params.id,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    email: req.body.email,
    interests: req.body.interests,
  };

  UserService.updateUser(userInfo, (err, user) => {
    if (err) return console.error(err);

    res.send(user);
  });
});

app.get('/profile/:id', (req, res) => {
  res.send(read('./views/profile.html', 'utf8'));
});

const server = app.listen(process.env.PORT || 5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Website server listening at http://${host}:${port}`);
});

// these are defined in the package.json under dependencies
const express = require('express');
// module for parsing http BODY
const bodyParser = require('body-parser');
// MONGO promised based
const mongodb = require('mongodb-then');
// local config module
const config = require('./config');
// connect to mongo using connection found in config
const mongo = mongodb(config.mongodb, ['users', 'books']);
// express, give me an instance of a server (not listening yet!)
const server = express();

// give a HTTP port to listen to
const port = process.env.PORT || 3000;

// GET -> headers, anything in the URL /users?page=1
// POST -> headers, uri, body

// config my server
// middleware are queued and execute top to bottom
server
  // middleware, this will parse ALL request and apply JSON.parse()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // middleware, which is a function to always run.
  .use((req, res, next) => {
    const authToken = req.headers.authorization;
    if (authToken && authToken === "bearer 123456789") {
      console.log("authorised");
      return next();
    }
    return res.status(403).json({ message: 'auth token is invalid' })
  })

  // users
  // 2 million users
  // 100 users at once
  // get /users?page=1&pageSize=100
  .get('/users', (req, res, next) => {
    mongo
      .users
      .find()
      .then(users => res.json({ users: users }))
      .catch(err => res.status(500).json({ message: 'there has been an error', err: err }))

  })
  .post('/users', (req, res, next) => {
    const user = req.body;
    mongo
      .users
      .insertOne(user)
      .then(inserted => res.json({ message: 'user inserted', user: inserted}))
      .catch(err => res.status(500).json({ err: err }))
  })
  .get('/users/:id', (req, res, next) => {
    const id = req.params.id;
    mongo
      .users
      .findOne({_id: mongo.ObjectId(id)})
      .then(function(user) {
        res.json({user: user})
      })
      .catch(function(err) {
          res.status(500).json({ err: err})
      })
  })
  .delete('/users/:id', (req, res, next) => {
    const id = req.params.id;
    mongo
      .users
      .remove({_id: mongo.ObjectId(id)}, {justOne: true})
      .then(param => res.json({message: 'resource has been removed'}))
      .catch(function(err) {
        res.status(500).json({err: err})
      })
  })
  .put('/users/:id', (req, res, next) => {
    const id = req.params.id;
    const { name, address } = req.body;
    mongo
      .users
      .update({_id: mongo.ObjectId(id)}, {$set: {name: name, address: address }}, {multi: true})
      .then(changed => res.json({ message: 'user data have been changed'}))
      .catch(err => res.status(500).json({ err: err}))
  })

  // books
  // 50000 books
  // 100 books at once
  // get /books?page=1&pageSize=100
  .get('/books', (req, res, next) => {
    mongo
      .books
      .find()
      .then(books => res.json({ books: books }))
      .catch(function(err) {
        return res.status(500).json({ err: err })
      })
  })
  .get('/books/:isbn', (req, res, next) => {
    const isbn = req.params.isbn;
    mongo
      .books
      .findOne({isbn: isbn})
      .then(book => res.json({ book: book }))
      .catch(err => res.status(500).json({ err: err}))
  })
  .post('/books', (req, res, next) => {
    const book = req.body;
    mongo
      .books
      .insertOne(book)
      .then(inserted => res.json({ message: 'book inserted', book: inserted }))
      .catch(err => res.status(500).json({ err: err }))
  })
  .delete('/books/:isbn', (req, res, next) => {
    const isbn = req.params.isbn;
    mongo
      .books
      .remove({isbn: isbn}, {justOne: true})
      .then(removed => res.json({ message: 'resource has been removed'}))
      .catch(err => res.status(500).json({ err: err}))
  })
  .put('/books/:isbn', (req, res, next) => {
    const isbn = req.params.isbn;
    const { title, price } = req.body;
    mongo
      .books
      .update({isbn: isbn}, {$set: {title: title, price: price }}, {multi: true})
      .then(changed => res.json({ message: 'information has been updated'}))
      .catch(err => res.status(500).json({ err: err}))
  })
  // start my server and listen
  .listen(port, () => console.log("server running"))

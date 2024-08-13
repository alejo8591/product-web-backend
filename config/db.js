const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const main = async function () {
  await mongoose.connect('mongodb+srv://bootcamp:7ejsB0aH2jSZJjeS@bootcamp.u3pou.mongodb.net/bootcamp');
};

main()
  .then(function (connect) {
    console.log('MongoDB Connected');
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = {
  User: require('../models/users'),
};
const Promise = require('bluebird');
var jwt = require('jsonwebtoken');

const config = require('../middlewares/config.json');
const users = require('../mocks/users.json');

const error = {error: 'User not found'};

const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    const userAuth = users[110]; //ToDo: remove when the DB implemented
    userAuth.token = jwt.sign(
      {
        sub:
          {
            email: email,
            first_name: userAuth.first_name,
            last_name: userAuth.last_name,
            locale: 'CO',
            roles: {
              is_admin: true,
              is_user: true
            }
          }
      },
      config.secret,
      {expiresIn: '1m'}
    );
    
    resolve(userAuth);
    reject(error);
  });
};

const logout = async (email, date) => {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

module.exports = {
  login,
  logout
};
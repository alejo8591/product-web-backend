const express = require('express');
const router = express.Router();

const authService = require('../services/auth');

const loginController = function (req, res) {
  return authService.login(req.body.email, req.body.password)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
};

const logoutController = function (req, res) {
  return authService.logout(req.body.email, req.body.date)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err));
};

router.post('/login', loginController);
router.post('/logout', logoutController);

module.exports = router;
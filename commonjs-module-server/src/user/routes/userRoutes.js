const express = require('express');
const route = express.Router();
//internal imports:
const getUserControllerFunc = require('../controllers/getUserController');
const postUserControllerFunc = require('../controllers/postUserController');
const patchUserControllerFunc = require('../controllers/patchUserController');

const userRouterFunc = (database) => {
    const userCollection = database.collection('commonjs_user');
    route.get('/', getUserControllerFunc(userCollection));
    route.post('/', postUserControllerFunc(userCollection));
    route.patch('/:id', patchUserControllerFunc(userCollection));
    return route;
};

module.exports = userRouterFunc;
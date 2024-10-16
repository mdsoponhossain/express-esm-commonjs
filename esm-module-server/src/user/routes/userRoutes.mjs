import express from 'express';
import { getUserControllerFunc } from '../controllers/getUserController.mjs';
import { postUserControllerFunc } from '../controllers/postUserController.mjs';
import { patchUserControllerFunc } from '../controllers/patchUserController.mjs';
const route = express.Router();
//internal imports:


export const userRouterFunc = (database) => {
    const userCollection = database.collection('esm_user_collection');
    route.get('/', getUserControllerFunc(userCollection));
    route.post('/', postUserControllerFunc(userCollection));
    route.patch('/:id', patchUserControllerFunc(userCollection));
    return route;
};


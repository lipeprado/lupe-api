/**
 * User Routes
 */

import express from 'express';

import {
  registerUser, getAllUsers, updateUser, deleteUser,
} from './controller';
import AuthVerification from '../../services/auth';

const routes = express.Router();
routes.get('/', getAllUsers);
routes.post('/register', registerUser);
routes.put('/profile/:id', AuthVerification, updateUser);
routes.delete('/profile/:id', AuthVerification, deleteUser);

export default routes;

/**
 * Auth Routes
 */

import express from 'express';

import login from './controller';

const routes = express.Router();
routes.post('/login', login);

export default routes;

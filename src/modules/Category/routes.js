/**
 * User Routes
 */

import express from 'express';

import { createCategory, updateCategory, deleteCategory } from './controller';
import AuthVerification from '../../services/auth';

const routes = express.Router();
routes.post('/', AuthVerification, createCategory);
routes.put('/:id', AuthVerification, updateCategory);
routes.delete('/:id', AuthVerification, deleteCategory);

export default routes;

import express from 'express';
import { login } from '../controllers/loginController.js';

const loginrouter = express.Router();

loginrouter.post('/login', login);

export default loginrouter;

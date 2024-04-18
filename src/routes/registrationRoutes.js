import express from 'express';
import { register } from '../controllers/regController.js';

const regrouter = express.Router();

regrouter.post('/register', register);


export default regrouter;

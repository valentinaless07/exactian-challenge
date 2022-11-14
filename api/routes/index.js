import express from 'express';
import { employeeEntry, employeeExit, employeeList, employeeRegister } from '../controllers/index.js';

const router = express.Router()

router.post('/register', employeeRegister)

router.put('/entry', employeeEntry)

router.put('/exit', employeeExit)

router.get('/list', employeeList)

export default router
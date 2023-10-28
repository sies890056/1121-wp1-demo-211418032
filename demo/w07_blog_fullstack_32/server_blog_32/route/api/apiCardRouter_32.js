import express from 'express';
const router = express.Router();

import db from '../../utils/database.js';

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(`select * from card_32`); 
        console.log('json data', JSON.stringify(results.rows));
        res.json(results.rows);
    } catch (error) {
        console.log(error);
    }
});

export default router;

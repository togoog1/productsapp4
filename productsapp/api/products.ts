
import * as express from 'express';
import database from '../db';

let router = express.Router();

// GET products
router.get('/', (req, res) => {
  database.db.collection('products').find().toArray().then((products)=>{
    res.json(products);
  })
});

export default router;

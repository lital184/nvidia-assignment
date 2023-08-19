import express from 'express';
import 'dotenv/config';
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());
app.get('/api/products', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, max-age=0'); // no-store indicates no caching, max-age=0 is just in case
  res.setHeader('Pragma', 'no-cache'); // Pragma header for compatibility

  const products = [];
  await db.collection('mnf_data').find().forEach(product => products.push(product));
  // console.log(Array.isArray(products))
  if (products.length > 0) {
      res.json(products);
  } else {
      res.sendStatus(404);
  }
});
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(8000, () => {
        console.log('Server is listening on port ' + 8000);
    });
})

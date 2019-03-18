require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/payments', (req, res) => {
  res.send('Welcome to Mobile Payments Gateway');
});

app.post('/payments/', async (req, res) => {
  try {
    const result = await stripe.charges.create({
      amount: req.body.amount, // Unit: cents
      currency: 'eur',
      source: req.body.tokenId,
      description: 'Test payment',
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log('Server is running on Port: ', PORT);
});

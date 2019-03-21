require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Mobile Payments Gateway');
});

app.post('/api/payments/', async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: 'test@test.com',
      source: req.body.tokenId,
    });
    const result = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'eur',
      customer: customer.id,
      source: customer.default_source.id,
      description: 'Test payment',
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;

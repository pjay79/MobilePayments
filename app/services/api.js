import axios from 'axios';

const makePayment = async (amount, tokenId) => {
  try {
    const body = {
      amount,
      tokenId,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = await axios.post('http://localhost:5000/api/payments', body, { headers });
    return data;
  } catch (error) {
    console.log('Error in making payment', error);
    return null;
  }
};

export default makePayment;

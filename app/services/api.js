import axios from 'axios';
import Config from 'react-native-config';

const makePayment = async (amount, tokenId) => {
  try {
    const body = {
      amount,
      tokenId,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    // const data = await axios.post(Config.DEV_URL, body, { headers });
    const data = await axios.post(Config.PROD_URL, body, { headers });
    return data;
  } catch (error) {
    console.log('Error in making payment', error);
    return null;
  }
};

export default makePayment;

import axios from 'axios';
import { apiKey } from '@components/ExchangeRates/apiKey';

const ExchangeInstance = axios.create({
  baseURL: 'https://currency-exchange.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
  },
});

export default ExchangeInstance;

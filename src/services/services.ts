import axios from 'axios';
import { PAGE_NUMBER, PAGE_LIMIT } from '../constants/constants';
import { CoinAPI } from '../types/types';

export const fetchCoins = async (page: number = PAGE_NUMBER) => {
  try {
    const { data } = await axios.get<CoinAPI>(`https://openapiv1.coinstats.app/coins?limit=${PAGE_LIMIT}&currency=usd&page=${page}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': import.meta.env.VITE_APP_COIN_STATS_KEY,
      }
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

import axios from 'axios';
import { PAGE_LIMIT } from '../constants/constants';
import { CoinAPI } from '../types/types';

export const fetchCoins = async (skip: number = 0) => {
  try {
    const { data } = await axios.get<CoinAPI>(`https://api.coinstats.app/public/v1/coins?limit=${PAGE_LIMIT}&currency=usd&skip=${skip}`);
    return data.coins;
  } catch (error) {
    console.error(error);
  }
}

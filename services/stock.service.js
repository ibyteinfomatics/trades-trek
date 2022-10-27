import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from '../helpers';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem('token')
);

function getAllStock() {
    return fetchWrapper
      .get(`${baseUrl}/user/stock/all`)
  
      .then((res) => {
        if (res.success) {
        }
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });
  }

function orderStock(data) {
    return fetchWrapper
      .post(`${baseUrl}/user/order/create`,{
        symbol:data.Symbol,
        quantity:Number(data.quantity),
        rate: (data.orderType == 'Market') ? parseFloat(data.Last) : parseFloat(data.rate),
        duration:data.duration,
        orderType:data.orderType,
        action:data.action,
        
        gameId:localStorage.getItem('GameId')
      })
  
      .then((res) => {
        if (res.success) {
        }
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });
  }



export const stockService ={
    user: userSubject.asObservable(),
    get userValue() {
      return userSubject.value;
    },
    getAllStock,
    orderStock
  };
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
        // console.log(res);
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
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
        rate:data.Last,
        duration:data.duration,
        orderType:data.orderType,
        action:data.action
      })
  
      .then((res) => {
        // console.log(res);
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
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
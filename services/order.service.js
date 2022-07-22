import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem('token')
);

function getAllOrder() {
    return fetchWrapper
      .get(`${baseUrl}/user/order/all`)
  
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

function getOpenOrder() {
    return fetchWrapper
      .get(`${baseUrl}/user/order/openOrders`)
  
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


  function getHoldingOrder() {
    return fetchWrapper
      .get(`${baseUrl}/user/order/holdings`)
  
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




export const orderService ={
    user: userSubject.asObservable(),
    get userValue() {
      return userSubject.value;
    },
    getAllOrder,
    getOpenOrder,
    getHoldingOrder
  };
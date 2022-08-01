import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem('token')
);



function getOpenOrder() {
    return fetchWrapper
      .get(`${baseUrl}/user/order/orders`)
  
      .then((res) => {
        // console.log(res);
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        
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
       
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });
  }

  // get cancel Order .........................     
  function getCancelOrder() {
    return fetchWrapper
      .get(`${baseUrl}/user/order/cancelOrders`)
  
      .then((res) => {
        
        
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });
  }

  // cancel order by id .........................    
  function cancelOrder(id) {
    return fetchWrapper
      .patch(`${baseUrl}/user/order/cancelOrder/${id}`)
  
      .then((res) => {
        
        
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });
  }


// show max ..................................................   

function showMax(rate,action,symbol){
  // console.log(data)
  
  return fetchWrapper
  .post(`${baseUrl}/user/order/showMax`, {rate:rate,action:action,symbol:symbol})
  .then((res) => {
   
    return res;
  })
  .catch(function (error) {
    return error;
  });
}



function StockDetail(symbol){
  // console.log(data)
  
  return fetchWrapper
  .post(`${baseUrl}/user/order/stockDetail`, {symbol:symbol})
  .then((res) => {
    
    return res[0];
  })
  .catch(function (error) {
    return error;
  });
}



export const orderService ={
    user: userSubject.asObservable(),
    get userValue() {
      return userSubject.value;
    },
    getOpenOrder,
    getHoldingOrder,
    getCancelOrder,
    cancelOrder,
    showMax,
    StockDetail
  };
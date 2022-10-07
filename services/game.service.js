import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from '../helpers';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem('token')
);


function createGame(data) {
  data.dateRange=`${data.startDate}-${data.endDate}`
  data.startingCash=Number(data.startingCash)
  delete data.startDate
  delete data.endDate
  // console
    return fetchWrapper
      .post(`${baseUrl}/game/createGame`,data)
  
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



export const gameService ={
    user: userSubject.asObservable(),
    get userValue() {
      return userSubject.value;
    },
    createGame,
    
  };
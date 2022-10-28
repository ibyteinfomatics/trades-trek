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
  data.dateRange=`${data.startDate} ${data.endDate}`
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

// get all game .....  
function getAllGame(search) {

  // console
    return fetchWrapper
      .get(`${baseUrl}/game?search=${search}`)
  
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


  function getMYGame(data) {

    // console
      return fetchWrapper
        .get(`${baseUrl}/game/myGames`)
    
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

    function joinGame(data) {

      // console
        return fetchWrapper
          .post(`${baseUrl}/game/join-game`,data)
      
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

      function myRank(data) {

        // console
          return fetchWrapper
            .get(`${baseUrl}/game/my-rank?gameId=${localStorage.getItem("GameId") || ''}`)
        
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
    getAllGame,
    getMYGame,
    joinGame,
    myRank
  };
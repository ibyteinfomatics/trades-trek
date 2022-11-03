import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import { fetchWrapper } from "../helpers";
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem("token")
);

function createGame(data) {
  data.dateRange = `${data.startDate} ${data.endDate}`;
  data.startingCash = Number(data.startingCash);
  delete data.startDate;
  delete data.endDate;
  // console
  return fetchWrapper
    .post(`${baseUrl}/game/createGame`, data)

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

// update game ..........................
function updateGame(data, gameId) {
  data.dateRange = `${data.startDate} ${data.endDate}`;

  delete data.startDate;
  delete data.endDate;
  // console
  return fetchWrapper
    .patch(`${baseUrl}/game/update/${gameId}`, data)

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
function getAllGame(search,page=1,limit=5) {
  // console
  return fetchWrapper
    .get(`${baseUrl}/game?search=${search}&page=${page}&limit=${limit}`)

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

function getMYGame(search,page=1,limit=5) {
  // console
  return fetchWrapper
    .get(`${baseUrl}/game/myGames?search=${search}&page=${page}&limit=${limit}`)

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
    .post(`${baseUrl}/game/join-game`, data)

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
    .get(
      `${baseUrl}/game/my-rank?gameId=${localStorage.getItem("GameId") || ""}`
    )

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

function deleteGame(id) {
  // console
  return fetchWrapper
    .delete(`${baseUrl}/game/delete/${id}`)

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

function portfolioResetting(id) {
  // console
  return fetchWrapper
    .delete(`${baseUrl}/game/reset-my-portfolio?gameId=${id}`)

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

export const gameService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  createGame,
  getAllGame,
  getMYGame,
  joinGame,
  myRank,
  updateGame,
  deleteGame,
  portfolioResetting
};

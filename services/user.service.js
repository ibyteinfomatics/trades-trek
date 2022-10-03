import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from '../helpers';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const userSubject = new BehaviorSubject(
  process.browser && localStorage.getItem('token')
);

function login(data) {
  return fetchWrapper
    .post(`${baseUrl}/user/login`, data)
    .then((res) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      if (res.success) {
        userSubject.next(res.token);
        localStorage.setItem('token', res.token);
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
//signup function
function signup(data) {
 
  return fetchWrapper
    .post(`${baseUrl}/user/signup`, data)

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
//Verify Otp
function verifyLoginOtp(email, otp) {
  return fetchWrapper
    .post(`${baseUrl}/user/verifyEmail`, {
      email: email,
      otp: otp,
    })
    .then((res) => {
      if (res.success) {
        userSubject.next(res.token);
        localStorage.setItem('token', res.token);
      }
      return res;
    })
    .catch(function (error) {
      return error;
    });
}

// forgot password ...................     
function forgot_password(email) {
  return fetchWrapper
    .post(`${baseUrl}/user/forgotPasswordSendOtp`, {
      email: email,
     
    })
    .then((res) => {
      if (res.success) {
        userSubject.next(res.token);
        localStorage.setItem('token', res.token);
      }
      return res;
    })
    .catch(function (error) {
      return error;
    });
}


// reset password .............. 
function reset_password(data) {
  return fetchWrapper
    .patch(`${baseUrl}/user/resetPassword`, data
    )
    .then((res) => {
      if (res.success) {
        userSubject.next(res.token);
        localStorage.setItem('token', res.token);
      }
      return res;
    })
    .catch(function (error) {
      return error;
    });
}
//Logout Function
function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('token');
  userSubject.next(null);
  Router.push('/');
}

// user info ............................................. 
function userInfo(){
  return fetchWrapper
      .get(`${baseUrl}/user/get/info`)
  
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

//Resend Otp
function resendOtp(email, otp) {
  return fetchWrapper
    .post(`${baseUrl}/user/resendOtp`, {
      email: email,
      otp: otp,
    })
    .then((res) => {
      if (res.success) {
        userSubject.next(res.token);
        localStorage.setItem('token', res.token);
      }
      return res;
    })
    .catch(function (error) {
      return error;
    });
}

// Change password .........................  

function changePassword(data){
  return fetchWrapper
  .patch(`${baseUrl}/user/changePassword`, data)
  .then((res) => {
    if (res.success) {
      userSubject.next(res.token);
      localStorage.setItem('token', res.token);
    }
    return res;
  })
  .catch(function (error) {
    return error;
  });
}


// user performance history ..................... 
function userPerformanceHistory(page){
  return fetchWrapper
      .get(`${baseUrl}/user/performanceHistory?page=${page}`)
  
      .then((res) => {
        // if (res.success) {
        // }
        return res;
      })
      .catch((error) => {
        if (error?.length > 0) {
          return error[0];
        }
        return error;
      });

}




export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  signup,
  verifyLoginOtp,
  resendOtp,
  forgot_password,
  reset_password,
  userInfo,
  changePassword,
  userPerformanceHistory
  
};

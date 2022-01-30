import { APIurls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import { LOGIN_START, LOGIN_SUCCESS ,LOGIN_FAILED  } from './actionTypes';
export function startLogin() {
  return {
    type: LOGIN_START
  };
}
export function login(email,password) {
  return (dispatch) => {
    dispatch(startLogin())
    const url = APIurls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
    .then(response=>response.json())
    .then(data=>{
      console.log('data',data);
      if(data.success){
        dispatch(loginSuccess(data.data.user));
        return;
      }
      dispatch(loginFailed(data.message));
    })
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
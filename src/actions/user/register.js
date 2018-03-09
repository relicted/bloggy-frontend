import axios from 'axios';
import settings from '../../config/settings';

export const createUser = (data) => dispatch => {
  try {
    axios.post(`${settings.api_host}register/`, data)
      .then(function (response) {
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        dispatch({type: "LOGIN_SUCCESS", payload: response.data})
      })
  } catch (error){
    // throw error;
  }
};

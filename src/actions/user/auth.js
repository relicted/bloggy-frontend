import axios from 'axios';
import settings from '../../config/settings';

export const createUser = (data) => async dispatch => {
  try {
    const response = await axios.post(`${settings.api_host}/register/`, data);
      localStorage.setItem('activeUser', JSON.stringify(response.data));
      dispatch({type: "LOGIN_SUCCESS", payload: response.data})
  } catch (error){
    throw error;
  }
};

export const login = data => async dispatch => {
  try {
    const response = await axios.post(`${settings.api_host}/login/`, data);
    localStorage.setItem('activeUser', JSON.stringify(response.data));
    dispatch({type: "LOGIN_SUCCESS", payload: response.data})
  } catch (error) {
    throw error
  }
};

export const logout = () => dispatch => {
    localStorage.removeItem('activeUser');
    dispatch({
        type: 'LOGOUT_SUCCESS'
    });
};
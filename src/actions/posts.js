import axios from 'axios';
import {normalize} from 'normalizr';
import {POST, USER} from '../utils/normalize';
import { setNormalized } from '../utils/main';

export const getPost = () => dispatch => {
  try {
    axios.get('http://localhost:8000/posts/')
      .then(function (response) {
        const {entities} = normalize(response.data, [POST]);
        setNormalized(dispatch, entities);
        // console.log(entities)

      })


  } catch (error){
    throw error;
  }
};
export const getUsers = () => dispatch => {
  try {
    axios.get('http://localhost:8000/accounts/')
      .then(function (response) {
        const {entities} = normalize(response.data, [USER]);
        setNormalized(dispatch, entities);
        // console.log(entities)
      })
  } catch (error){
    throw error;
  }
};

export const getDetail = (id) => dispatch => {
  try {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then(function (response) {
        const {entities} = normalize(response.data, [POST]);
        setNormalized(dispatch, entities);
        // console.log(entities)
      })
      .catch(function (error) {
        console.log(error.response)
      }
      )

  } catch (error){
    console.log(error.response)
    // throw error;
  }
};


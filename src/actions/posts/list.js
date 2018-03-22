import {normalize} from 'normalizr';
import axios from 'axios';
import settings from '../../config/settings';
import {headers} from '../../utils/headers';
import {POST} from "../../utils/normalize";
import {setNormalized} from "../../utils/main";


export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get(`${settings.api_host}/posts/`, headers());
    dispatch({type: "SET_POSTS_SUCCESS", payload: response.data.results})
  } catch (error){
    throw error;
  }
};

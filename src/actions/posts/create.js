import {normalize} from 'normalizr';
import axios from 'axios';
import settings from '../../config/settings';
import {headers} from '../../utils/headers';
import {POST} from "../../utils/normalize";
import {setNormalized} from "../../utils/main";


export const createPost = (data) => async dispatch => {
  let formData = new FormData();
  formData.append('body', data.body);
  formData.append('title', data.title);
  try {
    const response = await axios.post(`${settings.api_host}/posts/`, formData, headers());
    const {entities} = normalize(response.data, POST);
    setNormalized(dispatch, entities);
    return entities
  } catch (error){
    throw error;
  }
};

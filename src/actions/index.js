import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jeffreyshen18';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    //because the request is assigned to payload, the redux-promise middleware will give payload the list of posts after it retrieves it
    payload: request
  };
}

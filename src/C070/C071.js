import axios from 'axios';
import { url2 } from  "../sitedata.json";

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, payload: error });




export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios.post(url2) // 
      .then(response => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
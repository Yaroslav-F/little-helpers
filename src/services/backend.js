import axios from 'axios';

const Backend = {
  getPosts: function(callbackFunc) {
    axios({
      method: 'get',
      url: 'https://api.yfilyk.com/blog/posts',
      headers: { 'x-api-key': process.env.REACT_APP_TEMPORARY_API_KEY }
    }).then(response => callbackFunc(response))
  },
  getPost: function(slug, callbackFunc) {
    axios({
      method: 'get',
      url: 'https://api.yfilyk.com/blog/posts/' + slug,
      headers: { 'x-api-key': process.env.REACT_APP_TEMPORARY_API_KEY }
    }).then(response => callbackFunc(response))
  }
}

export default Backend;

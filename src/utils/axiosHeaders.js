import axios from 'axios'

export function setAuthenticationHeader(token) {
  let v = token ? 'Bearer ' + token : '';
  axios.defaults.headers.common['Authorization'] = v
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

}
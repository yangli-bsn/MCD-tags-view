// @flow
import axios from 'axios';

export default function getDashboard(params: Params): Promise<Object> {
  return axios({
    method: 'GET',
    url: '/data'
  })
  .then((response) => {
    return response.data;
  });
}

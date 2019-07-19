// @flow
import axios from 'axios';

export default function postDashboard(params: Params): Promise<Object> {
  return axios({
    method: 'POST',
    url: '/data',
    data: params
  }).then(response => response.data);
}

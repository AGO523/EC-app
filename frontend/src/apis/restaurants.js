import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

export const fetchRestaurants = () => {
  // axios.getの引数には文字列が必要で、ここではHTTPリクエストをなげる先のURL文字列が必要
  return axios.get(restaurantsIndex)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}

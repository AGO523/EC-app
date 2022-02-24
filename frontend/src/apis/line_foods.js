import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'

// URLに対してPOSTリクエストを送りたいので、axios.post()を使います。引数にリクエスト先のURL文字列、そして第二引数にパラメーターを渡します。今回はfood_idとcountの２つをオブジェクト形式で渡します。
// こうすることでサーバーサイドではparams[:food_id], params[:count]のかたちでそれぞれの値を読み取ることができます。
export const postLineFoods = (params) => {
  return axios.post(lineFoods,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};

export const replaceLineFoods = (params) => {
  return axios.put(lineFoodsReplace,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};

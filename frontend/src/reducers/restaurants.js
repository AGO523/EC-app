import { REQUEST_STATE } from '../constants';

// initialStateは初期state
// これをuseReducderに渡す
// initialStateには２つの値が入る
export const initialState = {
  // 1つ目がGET APIの状態を表すfetchState
  fetchState: REQUEST_STATE.INITIAL,
  // APIから取得したレストラン一覧が入ってきます。初期値は空配列として、[]を入れておきます。
  restaurantsList: [],
};

export const restaurantsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

// API取得中 => fetchStateはLOADINGにスイッチする
// API取得完了 => fetchStateをOKにスイッチし、restaurantsListにデータを入れる
export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case restaurantsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
}
// reducer関数はstateとactionを引数にとります。これはuseReducerで使われるreducer関数としては固定、と考えていいでしょう。
// stateとは初期状態であれば先ほど定義したinitialStateが、あるいは加工後のstateが入ります。またactionにはreducerを使う側が指定したrestaurantsActionTypsのいずれかが入ります。
// そして、restaurantsReducerは指定されたaction.typeに沿って、加工されたstateを返します。

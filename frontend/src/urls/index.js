const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

// サーバーサイドで定義したURL文字列を返す定数を設定
export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
// foodsIndexはURL文字列の途中に任意のrestaurantIdが入るため、引数にrestaurantIdを受け取り、それを文字列の中に展開
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;
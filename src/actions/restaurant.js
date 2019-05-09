import api from "../services/api";

export const searchRestaurants = (search) => async (dispatch) => {
  let response = await api.searchRestaurants(search)
  dispatch({
    type: LOAD_RESTAURANTS,
    restaurants: response.data.restaurants
  });
}

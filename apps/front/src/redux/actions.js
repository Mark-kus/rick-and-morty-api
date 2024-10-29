import axiosInstance from "./axios";

export const ActionTypes = {
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  ORDER: "ORDER",
  FILTER: "FILTER",
  GET_FAVORITES: "GET_FAVORITES",
};

export const addFav = (character) => {
  return async function (dispatch) {
    const response = await axiosInstance.post(`/favorite`, character);
    return dispatch({
      type: ActionTypes.ADD_FAVORITE,
      payload: response.data,
    });
  };
};

export const getFavs = () => {
  return async function (dispatch) {
    const response = await axiosInstance(`/favorite`);
    return dispatch({
      type: ActionTypes.GET_FAVORITES,
      payload: response.data,
    });
  };
};

export const deleteFav = (id) => {
  return async function (dispatch) {
    const response = await axiosInstance.delete(`/favorite/${id}`);
    return dispatch({
      type: ActionTypes.DELETE_FAVORITE,
      payload: response.data,
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: ActionTypes.FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ActionTypes.ORDER,
    payload: order,
  };
};

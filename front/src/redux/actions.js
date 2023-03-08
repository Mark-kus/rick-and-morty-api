import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "./types";

export const addFav = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character,
    }
}

export const deleteFav = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}
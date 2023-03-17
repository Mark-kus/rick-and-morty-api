import axios from 'axios';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const ORDER = 'ORDER';
export const FILTER = 'FILTER';
export const GET_FAVORITES = 'GET_FAVORITES';

// La action addFavorites, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que envíe el personaje favorito al endpoint con el método POST http://localhost:3001/rickandmorty/fav.

// La action removeFavorites, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que elimine el personaje favorito con el método DELETE al endpoint http://localhost:3001/rickandmorty/fav/:id.

// Crea una action getFavorites, debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que solicite el personaje favorito con el método GET al endpoint http://localhost:3001/rickandmorty/fav.

export const addFav = (character) => {
    return async function (dispatch) {
        const response = await axios.post(`http://localhost:3001/rickandmorty/fav`, character);
        return dispatch({
            type: ADD_FAVORITE,
            payload: response.data,
        })
    }
}

export const getFavs = () => {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/rickandmorty/fav`);
        return dispatch({
            type: GET_FAVORITES,
            payload: response.data,
        });
    }
}

export const deleteFav = (id) => {
    return async function (dispatch) {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        return dispatch({
            type: DELETE_FAVORITE,
            payload: response.data,
        })
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
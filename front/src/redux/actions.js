import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "./types";

// La action addFavorites, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que envíe el personaje favorito al endpoint con el método POST http://localhost:3001/rickandmorty/fav.

// La action removeFavorites, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que elimine el personaje favorito con el método DELETE al endpoint http://localhost:3001/rickandmorty/fav/:id.

// Crea una action getFavorites, debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que solicite el personaje favorito con el método GET al endpoint http://localhost:3001/rickandmorty/fav.

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
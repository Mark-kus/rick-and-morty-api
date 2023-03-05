import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            const newFavs = [...state.allCharacters];
            newFavs.push(action.payload);
            return {
                ...state,
                allCharacters: newFavs,
                myFavorites: newFavs,
            }

        // all fine
        // case ADD_FAVORITE:
        //     const newFavs = [...state.myFavorites];
        //     newFavs.push(action.payload);
        //     return {
        //         ...state,
        //         myFavorites: newFavs,
        //     }

        case DELETE_FAVORITE:
            const delFav = state.myFavorites.filter(el => el.id !== action.payload);
            return {
                ...state,
                allCharacters: delFav,
                myFavorites: delFav,
            }

        // ORDER y FILTER, casos after all fine

        case ORDER:
            let order = state.myFavorites
            if (action.payload === 'Ascendente') {
                order = state.myFavorites.sort((a, b) => a.id > b.id)
            }
            if (action.payload === 'Descendente') {
                order = state.myFavorites.sort((a, b) => a.id < b.id)
            }
            return {
                ...state,
                myFavorites: order,
            }

        case FILTER:
            if (action.payload === 'none') return {
                 ...state,
                 myFavorites: state.allCharacters
                }
            return {
                ...state,
                myFavorites: state.allCharacters.filter(el => el.gender === action.payload)
            }

        default:
            return state;
    }
}

export default reducer;
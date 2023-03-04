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
                myFavorites: state.allCharacters,
                allCharacters: newFavs,
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
            return {
                ...state,
                myFavorites: state.myFavorites.filter(el => el.id !== action.payload),
            }

        // ORDER y FILTER, casos after all fine

        case ORDER:
            if (action.payload === 'Ascendente') {
                state.allCharacters.sort((a, b) => a.id < b.id)
            }
            if (action.payload === 'Descendente') {
                state.allCharacters.sort((a, b) => a.id > b.id)
            }
            return {
                ...state,
                myFavorites: state.allCharacters,
            }

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(el => el.gender === action.payload)
            }

        default:
            return state;
    }
}

export default reducer;
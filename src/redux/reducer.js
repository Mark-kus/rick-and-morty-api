import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_FAVORITE:
            const newFavs = [...state.myFavorites];
            newFavs.push(action.payload);
            return {
                ...state,
                myFavorites: newFavs,
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(el => el.id !== action.payload),
            }
    
        default:
            return state;
    }
}

export default reducer;
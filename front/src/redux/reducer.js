import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, GET_FAVORITES } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FAVORITES:
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload,
            }
        case ADD_FAVORITE:
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload,
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload,
            }

        case ORDER:
            let order = [...state.myFavorites]
            if (action.payload === 'Ascendente') {
                order.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'Descendente') {
                order.sort((a, b) => b.name.localeCompare(a.name))
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
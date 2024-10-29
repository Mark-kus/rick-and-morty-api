import { ActionTypes } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FAVORITES ||
      ActionTypes.ADD_FAVORITE ||
      ActionTypes.DELETE_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };

    case ActionTypes.ORDER:
      let order = [...state.myFavorites];
      if (action.payload === "Ascendente") {
        order.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "Descendente") {
        order.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        myFavorites: order,
      };

    case ActionTypes.FILTER:
      if (action.payload === "none")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.filter((el) => el.gender === action.payload),
        ],
      };

    default:
      return state;
  }
};

export default reducer;

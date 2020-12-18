import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 1
    },
    totalPrice: 2,
    error: false
}
const PRICES = {
    salad: 0.5, 
    cheese: 1,
    meat: 2,
    bacon: 0.8
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
              ...state,
              ingredients: {
                  ...state.ingredients,
                  [action.ingredientName]: state.ingredients[action.ingredientName] + 1
              },
              totalPrice: state.totalPrice + PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - PRICES[action.ingredientName]
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                 ingredients: action.ingredients,
                 error: false
            }
        case actionTypes.FETCHED_INGREDIENTS_FAILED:
            return {
                ...state,
                    ingredients: action.ingredients,
                    error: true
            }
        default:
            return state;
    }  
}

export default reducer;
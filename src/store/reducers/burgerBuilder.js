import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
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
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state, 
                loading: true
        }
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
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon:  action.ingredients.bacon,
                    cheese:  action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 2,
                error: false
            }
        case actionTypes.FETCHED_INGREDIENTS_FAILED:
            return {
                ...state,
                    error: true
            }
        default:
            return state;
    }  
}

export default reducer;
import React, {useState } from 'react';
import { RenderedBurger } from './RenderedBurger';
import {CounterBoard} from './CounterBoard';
import Modal from './Modal'
import OrderSummary from './OrderSummary'; 

const PRICES = {
    salad: 0.5, 
    cheese: 1,
    meat: 2,
    bacon: 0.8
}
export const MainBoard = () => {
    const [ingredients, setIngredients] = useState({
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
       })
    const [totalPrice, setTotalPrice] = useState(2)
    const [canBuy, setCanBuy] = useState(false)
    const [checkout, setCheckout] = useState(false)

    const updateCanBuy = (ingredients) => {
        const sum = Object.keys(ingredients).map((item) => {
            return  ingredients[item]
        }).reduce((sum, el) => {
            return sum + el
        },0)
        setCanBuy(sum>0)
     } 

    const wantToCheckout = () => {
        setCheckout(true)
    }

    const wantToCancel = () => {
        setCheckout(false)
    }

    const wantToContinue = () => {
        alert('Continue')
    }


    const addIngredientHandler = (name) => {
        const updatedIngredient = { 
            ...ingredients
        }
        updatedIngredient[name] = ingredients[name]+1;
        const newPrice = totalPrice + PRICES[name];
        setTotalPrice(newPrice)
        setIngredients( updatedIngredient)
        updateCanBuy(updatedIngredient)
    } 

    const removeIngredientHandler = (name) => {
        const updatedIngredient = { 
            ...ingredients
        }
        if(updatedIngredient[name] <= 0) {
            return;
        }
        updatedIngredient[name] = ingredients[name]-1;
        const newPrice = totalPrice - PRICES[name];
         setTotalPrice(newPrice)
        setIngredients( updatedIngredient)
        updateCanBuy(updatedIngredient)
    } 

    const disabledInfo = {...ingredients}
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
            <React.Fragment>
            <Modal show={checkout} modalClosed={wantToCancel}>
                <OrderSummary
                    ingredients={ingredients}
                    cancel={wantToCancel}
                    continue={wantToContinue}
                    price= {totalPrice}
                />
            </Modal>
            <RenderedBurger ingredients= {ingredients}/>
            <CounterBoard 
            ingredients= {ingredients}
            addItem={addIngredientHandler}
            removeItem={removeIngredientHandler}
            disabled={disabledInfo}
            price={totalPrice}
            canBuy={canBuy}
            toCheckout={wantToCheckout}
            />
            </React.Fragment>
         )  
};
    

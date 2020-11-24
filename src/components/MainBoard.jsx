import React, {useState, useEffect } from 'react';
import { RenderedBurger } from './RenderedBurger';
import {CounterBoard} from './CounterBoard';
import Modal from './Modal'
import OrderSummary from './OrderSummary'; 
import axios from '../axios_orders';
import Spinner from './Spinner';


const PRICES = {
    salad: 0.5, 
    cheese: 1,
    meat: 2,
    bacon: 0.8
}

export const MainBoard = () => {
    const [ingredients, setIngredients] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)
    const [canBuy, setCanBuy] = useState(false)
    const [checkout, setCheckout] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('https://the-burger-maker.firebaseio.com/orders/ingredients.json')
        .then((response) => setIngredients(response.data))
        .catch((error) => setError(true))
      }, []); 

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
        setLoading(true);
        const order = {
            ingredients: ingredients,
            price: totalPrice,
            customer: {
                name: 'Dani Mani',
                address: {
                    street: 'Somestreet 2',
                    zipcode: '1223',
                    country: 'Sweden'
                },
                email:'Dani@mani.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
        .then( response => {
            setLoading(false)
            setCheckout(false)
        })
        .catch(error => {
            setLoading(false)
            setCheckout(false)
        })
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
    let orderSummary = null;

    let burger = error ? <p>Error fetching data </p>: <Spinner />;

    if( ingredients) {
        burger = (
            <React.Fragment>
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
        );
        orderSummary = (
            <OrderSummary
            ingredients={ingredients}
            cancel={wantToCancel}
            continue={wantToContinue}
            price= {totalPrice}
        />
        )
    }

    if (loading) {
        orderSummary = 
        <Spinner />
    }
   


    return (
            <React.Fragment>
            <Modal show={checkout} modalClosed={wantToCancel}>
              { orderSummary } 
            </Modal>
                { burger }
            </React.Fragment>
         )  
};
    

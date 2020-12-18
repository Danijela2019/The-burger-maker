import React from 'react'

import  classes from './Orders.module.css';

const Order = (props) => {
    const ingredients = [];
    for( let ingredientName in props.ingredients ) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]}) 
    }
    const ingredientsArray = ingredients.map((item) => {
        return (
            <span key={item.name}>{' '}{item.name}({item.amount})</span>
        )
    })
    return (
        <div className={classes.OrderContainer}>
            <p className={classes.Order}>Your order:{' '}{ingredientsArray}</p>
            <p className={classes.Order}>Total price: {' '}{Number.parseFloat(props.price).toFixed(2)} SEK</p>
        </div>
    )
}
export default Order;
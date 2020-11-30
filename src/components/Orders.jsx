import axios from '../axios_orders';
import React, { useState, useEffect } from 'react';
import  classes from'../CSS/Orders.module.css';

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



   

const Orders = (props) => {
    const[orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('/orders.json')
        .then((response) => {
            const fetchedOrders=[];
            for( let key in response.data) {
                fetchedOrders.push(
                    { ...response.data[key],
                      id:key 
                    }
                )
            }
        
        setOrders(fetchedOrders)})
        .catch((error) =>{
          console.log(error)})
    }, [orders]); 
 

    const ordersArray = orders.map((order) => {
        return (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
              />
        )

    })
    return (
        <div className={classes.OrdersContainer}>
            {ordersArray}
        </div>
    )
}

export default Orders;
import React from 'react';
import classes from './CounterBoard.module.css';



const IngredientCounter = (props) => {
    return (
        <div className={classes.Counter}>
            <div className={classes.Label}>{props.children}</div>
            <button  className={classes.Minus}  onClick={props.removed} disabled={props.disabled}>-</button>
            <input className={classes.Input} value={props.quantity} readOnly={true} type="text" min="0" max="100"/> 
            <button  className={classes.Plus} onClick={props.added} >+</button>
        </div>
    )
} 

export const CounterBoard = (props) => {
    const counterState = Object.values(props.ingredients)
    return (
        <div className={classes.CounterBoard}>
        <p>Total price:{''}{props.price.toFixed(2)}</p>
        <IngredientCounter
             added={() => props.addItem('bacon')}
             removed={() => props.removeItem('bacon')}
             disabled={props.disabled['bacon']}
             quantity={counterState[0]} >
                 BACON
        </IngredientCounter>
        <IngredientCounter
             added={() => props.addItem('cheese')}
             removed={() => props.removeItem('cheese')}
             disabled={props.disabled['cheese']}
             quantity={counterState[1]} >
                 CHEESE
        </IngredientCounter>
        <IngredientCounter 
            added={() => props.addItem('salad')}
            removed={() => props.removeItem('salad')}
            disabled={props.disabled['salad']}
            quantity={counterState[3]} >
                SALAD
        </IngredientCounter>
        <IngredientCounter
             added={() => props.addItem('meat')}
             removed={() => props.removeItem('meat')}
             disabled={props.disabled['meat']}
             quantity={counterState[2]} >
                 MEAT
        </IngredientCounter>
        <button disabled={!props.canBuy} onClick={props.toCheckout} className={classes.OrderButton}>ORDER</button>
        </div>
    )

}


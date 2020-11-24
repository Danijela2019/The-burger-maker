import React from 'react';
import Button from './Button'


const OrderSummary = (props) => {
    const orderedBurgerIngredients = Object.keys(props.ingredients).map((item) => {
        return (
        <li key={item}>
                <span style={{textTransform:'capitalize'}}>{item}</span>:
                {props.ingredients[item]}
        </li>
        )
    })
    return (
        <React.Fragment>
            <h3>Your order summary</h3>
            <p>A nice burger with the ingrediets:</p>
            <ul>                
                {orderedBurgerIngredients}
            </ul>
            <p>Total price: {''}{props.price.toFixed(2)} SEK</p>
            <p>Countinue to checkout?</p>
            <Button clicked={props.cancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continue} btnType='Success'>CONTINUE</Button>

        </React.Fragment>

    )
}

export default OrderSummary;
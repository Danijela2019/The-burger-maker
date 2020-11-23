import React from 'react';


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
            <p>Countinue to checkout?</p>

        </React.Fragment>

    )
}

export default OrderSummary;
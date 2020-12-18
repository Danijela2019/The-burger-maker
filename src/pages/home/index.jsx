import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux'

import { RenderedBurger } from '../../components/shared/renderedBurger/RenderedBurger';
import {CounterBoard} from './CounterBoard';
import Modal from './Modal'
import OrderSummary from './OrderSummary'; 
import Spinner from '../../components/shared/spinner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index'
import axios from '../../axios_orders'

export const Home = (props) => {
    const [checkout, setCheckout] = useState(false)
    const [error, setError] = useState(false)
    
        
    
        /*useEffect(() => {
            axios.get('https://the-burger-maker.firebaseio.com/.json')
            .then((response) => {
                console.log('What I get',response.data.ingredients )
               setIngredients(response.data.ingredients)})
            .catch((error) => setError(true))
          }, []);  */
        
        

    const updateCanBuy = (ingredients) => {
        const sum = Object.keys(ingredients).map((item) => {
            return  ingredients[item]
        }).reduce((sum, el) => {
            return sum + el
        },0)
        return sum > 0;
     } 

    const wantToCheckout = () => {
        setCheckout(true)
    }

    const wantToCancel = () => {
        setCheckout(false)
    }

    const wantToContinue = () => {
        props.history.push('./checkout');
    }

   
    const disabledInfo = {...props.ings}
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;

    let burger = error ? <p>Error fetching data </p>: <Spinner />;

    if(props.ings) {
        burger = (
            <React.Fragment>
            <RenderedBurger ingredients= {props.ings}/>
            <CounterBoard 
            ingredients= {props.ings}
            addItem={props.onIngredientAdded}
            removeItem={props.onIngredientRemoved}
            disabled={disabledInfo}
            price={props.price}
            canBuy={updateCanBuy(props.ings)}
            toCheckout={wantToCheckout}
            />
            </React.Fragment>
        );
        orderSummary = (
            <OrderSummary
            ingredients={props.ings}
            cancel={wantToCancel}
            continue={wantToContinue}
            price= {props.price}
        />
        )
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

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) =>  dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home,axios);
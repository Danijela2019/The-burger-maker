import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux'

import RenderedBurger  from '../../components/shared/renderedBurger/RenderedBurger';
import CounterBoard from './CounterBoard';
import Modal from './Modal'
import OrderSummary from './OrderSummary'; 
import Spinner from '../../components/shared/spinner/Spinner';
import * as actions from '../../store/actions/index'
import axios from '../../axios_orders'

export const BurgerMaker = (props) => {
    const {
        onInitIngredients,
        onInitPurchase,
        history,
        onIngredientAdded,
        onIngredientRemoved,
        ings,
        price,
        error
    } = props
    
    const [checkout, setCheckout] = useState(false)
    
    useEffect(() => {
        onInitIngredients()
    }, [onInitIngredients]);  
        
    const updateCanBuy = (ingredients) => {
        const sum = Object.keys(ingredients).map((item) => {
            return  ingredients[item]
        }).reduce((sum, el) => {
            return sum + el
        },0)
        return sum > 0;
     } 

    const wantToCheckout = () => {
        if ( props.isAuthenticated) {
            setCheckout(true)
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const wantToCancel = () => {
        setCheckout(false)
    }

    const wantToContinue = () => {
        onInitPurchase();
        history.push('./checkout');
    }

   
    const disabledInfo = {...props.ings}
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;

    let burger = error ? <p>Error fetching data </p>: <Spinner />;

    if(ings) {
        burger = (
            <React.Fragment>
            <RenderedBurger ingredients= {ings}/>
            <CounterBoard 
            ingredients= {ings}
            addItem={onIngredientAdded}
            removeItem={onIngredientRemoved}
            disabled={disabledInfo}
            price={price}
            canBuy={updateCanBuy(ings)}
            toCheckout={wantToCheckout}
            isAuth={props.isAuthenticated}
            />
            </React.Fragment>
        );
        orderSummary = (
            <OrderSummary
            ingredients={ings}
            cancel={wantToCancel}
            continue={wantToContinue}
            price= {price}
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
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) =>  dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMaker,axios);
import React, { useEffect } from 'react';
import {connect} from 'react-redux'

import Spinner from '../../components/shared/spinner/Spinner';
import  classes from './Orders.module.css';
import Order from './Order';
import * as actions from '../../store/actions/index'


const Orders = (props) => {
    const {onFetchOrders, token, userId} = props;
    useEffect(() => {
        onFetchOrders(token, userId)
    }, [onFetchOrders,token,userId]); 
 
    let ordersArray = props.orders.map((order) => {
        return (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
              />
        )
    })

    if(props.loading) {
       ordersArray = <Spinner />
    }

    return (
        <div className={classes.OrdersContainer}>
            {ordersArray}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token,userId) => dispatch(actions.fetchOrders(token, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
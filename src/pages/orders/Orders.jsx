import React, { useEffect } from 'react';
import {connect} from 'react-redux'

import Spinner from '../../components/shared/spinner/Spinner';
import  classes from './Orders.module.css';
import Order from './Order';
import * as actions from '../../store/actions/index'


const Orders = (props) => {
    useEffect(() => {
        props.onFetchOrders()
    }, []); 
 
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
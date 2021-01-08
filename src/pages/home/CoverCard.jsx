import React from 'react';
import {useHistory} from 'react-router-dom'

import  classes from './CoverCard.module.css';
import burger from '../../assets/burger.png'
import Button from '../../components/shared/button/Button'

const Cover = () => {
    let history = useHistory();

    const redirectToBurgerMaker = () => {
        history.push('/burger')

    }
    return (
        <div className={classes.CardContainer}>
            <div className={classes.TextContainer}>
                <h1 className={classes.Header}>The burger maker</h1>
                <h3>A burger made with love</h3>
                <p>Make a burger at your own taste and have it delivered at your door within 20 min in the city center with no extra cost for orders above 10SEK.</p>
                <Button clicked={redirectToBurgerMaker} btnType="Hero"> Make a burger </Button>
            </div>
            <img className={classes.Burger} src={burger} alt='burger' />
        </div>
    )
}

export default Cover;
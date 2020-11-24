import React from 'react';
import classes from '../CSS/RenderedBurger.module.css'


const Ingredient = (props) => { 
    let ingredient = null; 
    switch (props.name) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
        break;
        case ('bread-top'): 
        ingredient = <div className={classes.BreadTop}></div>;
        break;
        case ('meat'):
             ingredient = <div className={classes.Meat}></div>;
        break;
        case ('cheese'):
             ingredient = <div className={classes.Cheese}></div>;
        break;
        case ('salad'): 
        ingredient = <div className={classes.Salad}></div>;
        break;
        case ('bacon'): ingredient = <div className={classes.Bacon}></div>;
        break;
        default:
        ingredient = null;
    }
    return ingredient;
}

export const RenderedBurger = (props ) => {
    const extractedIngredients = Object.keys(props.ingredients)
    .map(item => {
        return [...Array(props.ingredients[item])]
        .map((_element, index) => {
            return <Ingredient key={item+index} name={item} />
        });
    });
    
    return (
        <div className={classes.Burger}>
            <Ingredient  name="bread-top"/>
            {extractedIngredients}
            <Ingredient  name="bread-bottom"/>
        </div>
    )
}
import React from 'react';

import classes from './Input.module.css'


const  Input = (props) => {

    let validationError = null;
    if (props.invalid && props.touched) {
    validationError = <p className={classes.Validation}>The value you entered is invalid</p>;
    }
 
    let inputElement = null;
    const inputClasses=[classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'): 
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}
                 
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}
            />; 
            break;
            case ('select'):
                inputElement = <select
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((option) => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>;
                break;
            default:
                inputElement = <input 
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value} onChange={props.changed}
                />;
    }

    return (
        <div className={classes.InputContainer}>
            <label className={classes.Label}> {props.label} </label>
            {validationError}
            {inputElement}
        </div>
    )
}

export default Input;
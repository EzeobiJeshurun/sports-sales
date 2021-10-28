import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'

const MealItemForm=(props)=> {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputAmountRef = useRef();
    const submitHandler= event => {
        event.preventDefault()
        const enteredAmount = inputAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount
        if(enteredAmount.trim().length === 0|| enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setAmountIsValid(false)
          return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputAmountRef}
                label="Amount" 
                input={{
                id: "amount_" + props.id,
                type: "number",
                max: "5",
                min: "1",
                step: "1",
                defaultValue: "1"
            }}/>
            <button>+ Add</button>
             {!amountIsValid && <p>Please enter a valid amount!</p>}
        </form>
    )
}

export default MealItemForm

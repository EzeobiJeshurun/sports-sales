import React, { useContext } from 'react'
import CartIcon from '../../Cart/CartIcon'
import CartContext from '../../../store/cartContext/cart-context'
import classes from '../HeaderCartButton/HeaderCartButton.module.css'

const HeaderCartButton=(props) =>{
    const ctx = useContext(CartContext);

    const numberOfCartItems = ctx.items.reduce?.((currentNumber,item)=>{
        return currentNumber + item.amount
    })
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton

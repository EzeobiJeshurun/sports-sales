import React, { useContext, useEffect, useState} from 'react'
import CartIcon from '../../Cart/CartIcon'
import CartContext from '../../../store/cartContext/cart-context'
import classes from '../HeaderCartButton/HeaderCartButton.module.css'

const HeaderCartButton=(props) =>{
    const {items} = useContext(CartContext);
    const [animate, setAnimate]= useState(false);
    
    const numberOfCartItems = items?.reduce?.((currentNumber,item)=>{
        return currentNumber + item.amount
    },0)

    const btnClasses = `${classes.button} ${animate? classes.bump : ""}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
      setAnimate(true)
      let removeAnimate =setTimeout(()=>{
       setAnimate(false);
      },300);

      return ()=>{
          clearTimeout(removeAnimate);
      }
    },[items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton

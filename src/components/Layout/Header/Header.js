import React, {Fragment} from 'react'
import sportsImage from '../../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'

const Header=(props) =>{
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>Meals store</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={sportsImage} alt="sport kits"/>
        </div>
        </Fragment>
    )
}

export default Header

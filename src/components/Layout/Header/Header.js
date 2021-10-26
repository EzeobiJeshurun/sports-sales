import React, {Fragment} from 'react'
import sportsImage from '../../../assets/meals.jpg'
import classes from './Header.module.css'

const Header=(props) =>{
    return (
        <Fragment>
        <header className={classes.header}>
            <div>Booking store</div>
            <div>Booking store</div>
        </header>
        <div className={classes['main-image']}>
            <img src={sportsImage} alt="sport kits"/>
        </div>
        </Fragment>
    )
}

export default Header

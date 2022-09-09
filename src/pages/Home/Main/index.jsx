
import main from '../Main/photo/main.jpg'
import map from '../Main/photo/map.jpg'
import mainBackground from '../Main/photo/mainBackground.jpg'
import classes from '../Main/styles.module.scss'
import clsx from 'clsx'
import {Dishes} from '../../../components/Dishes'
import{Text} from '../../../components/Text'

import React from 'react'

export const Main=()=>{
    return(
        <div className={classes.main}>
             <span>
                <img src={main} alt="" className={classes.mainPhoto}/>
                
                <div className={classes.mainText}>Сделай заказ на 399 грн 
            и получи салат «Цезарь» в подарок!</div>
            
            <div className={classes.mainButton}>
            <button type="submit" className={clsx(classes.DiscountButton, classes.order)}>Подробнее об акции</button>
            </div>
            <div className={classes.mainDishes}>Рекомендуемые блюда</div>
            
            </span>
            <Dishes/>
            <Text/>
        </div>
    )
}
 
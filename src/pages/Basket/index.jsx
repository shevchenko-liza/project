import carts from '../../pages/Basket/photo/path.png'
import classes from '../../pages/Basket/styles.module.scss'
import React,{useState} from 'react'


import {BasketHeader} from '../../pages/Basket/BasketHeader'
import {BasketFooter} from '../../pages/Basket/BasketFooter'
import {FreeDelivery} from '../../pages/Basket/FreeDelivery'
import {Box} from '../../pages/Basket/Box'
import {Delivery} from '../../pages/Basket/Delivery'
import icon2 from '../Basket/photo/phon.png'
export const Basket = () => {
    
    let [ cart,setCart ] = useState(false)


    return (
     <div>
         <span >
           <img  src={icon2} alt="" className={classes.phon}  />
         </span>
           <img  src={carts} alt="" onClick={()=>setCart(cart = !cart)} className={classes.path}  />
   {cart && (
          <div className={classes.shop}> 
          <div className={classes.basket}>Корзина</div>
            <BasketHeader/>
            <FreeDelivery/>
            <Delivery/>
            <Box/>
            <BasketFooter/>
            </div> 
        )} 
  </div>
    )
  }
  
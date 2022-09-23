import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'

import icon1 from './photo/delete.png'
import icon2 from './photo/border.png'

import { BasketHeader } from './BasketHeader'
import { BasketFooter } from './BasketFooter'
import { FreeDelivery } from './FreeDelivery'
import { Box } from './Box'
import { Delivery } from './Delivery'

import path from './photo/cart.png'


import { CATALOG } from '../../store/slices/catalog'
import { CART } from '../../store/slices/cart'

import classes from './styles.module.scss'
import clsx from 'clsx'

const Order = ({id}) => {
  const [amount, setAmount] = useState(0);
  const decrease= useCallback(()=>setAmount((amount) => amount-1) ,[]);
  const increase= useCallback(()=>setAmount((amount) => amount+1) ,[])

  const handleChange = useCallback(event => {
    setAmount(event.target.value)
  }, [])

  const handleSubmit = useCallback(event => {
    event.preventDefault()

    console.log({amount,id })
  }, [amount,id])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputBox}>
        <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
        <input type="text" size="3"    className={classes.input} value={amount} onChange={handleChange} />
        <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
      </div>
     </form>
  )

}



export const Basket = () => {
  const cart = useSelector(CART)
  const catalog = useSelector(CATALOG)
  // const dish = catalog.filter(product => product.recommended)
  let [open, setOpen] = useState(false)

  return (
    <div className={clsx(classes.backdrop, { [classes.hide]: !open })}>
      <div className={clsx(classes.cart, { [classes.open]: open })}>
        <button className={classes.toggler} onClick={() => setOpen(open => !open)}>
          <img src={path} className={classes.icon}/>
        </button>
        <div className={classes.basket}>Корзина</div>
        {Object.keys(cart.list).map(burgerId => {
          const burger = catalog.find(burger => +burger.id === +burgerId)

          if (!burger) {
            return null
          }


          

          return (
        <div>         
              <div className={classes.cartCatalog}>                    
               <div className={classes.photoBox}>
                <img className={classes.photo} src={burger.photo} alt="" />               
              </div>    
            <div className={classes.infoBox}>  
              <div className={classes.title}>{burger.name} </div>            
              <div className={classes.price}> {burger.price}</div>         
          {/* <div className={classes.count}>{cart.list[burgerId].count}</div> */}
            </div>
               <Order/>
               <div className={classes.buttonForm}>
               <button className={classes.butttonDelet}>
            <img className={classes.delet} src={icon1} alt="" />
            </button>            
            </div>           
           </div>         
           <img className={classes.border} src={icon2} alt="" />          
        </div>           
            )}
            
          )
        }        
        <BasketHeader />
        <FreeDelivery />
        <Delivery />
        <Box />
        <BasketFooter />
      </div>
    </div>
  )
}
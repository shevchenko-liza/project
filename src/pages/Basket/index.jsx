import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { BasketHeader } from './BasketHeader'
import { BasketFooter } from './BasketFooter'
import { FreeDelivery } from './FreeDelivery'
import { Box } from './Box'
import { Delivery } from './Delivery'

import path from './photo/cart.png'
import phon from './photo/phon.png'

import { CATALOG } from '../../store/slices/catalog'
import { CART } from '../../store/slices/cart'

import classes from './styles.module.scss'
import clsx from 'clsx'

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
            <p>{burger.name}&nbsp;{cart.list[burgerId].count}</p>
          )
        })}
        <BasketHeader />
        <FreeDelivery />
        <Delivery />
        <Box />
        <BasketFooter />
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { BasketHeader } from './BasketHeader'
import { BasketFooter } from './BasketFooter'
import { FreeDelivery } from './FreeDelivery'
import { Box } from './Box'
import { Delivery } from './Delivery'

import carts from './photo/path.png'
import icon2 from './photo/phon.png'

import { BURGERS } from '../../store/slices/burgers'
import { CART } from '../../store/slices/cart'

import classes from './styles.module.scss'
import clsx from 'clsx'

export const Basket = () => {
  const cart = useSelector(CART)
  const burgers = useSelector(BURGERS)

  let [open, setOpen] = useState(false)

  console.log({ cart, burgers });

  return (
    <div className={clsx(classes.backdrop, { [classes.hide]: !open })}>
      <div className={clsx(classes.cart, { [classes.open]: open })}>
        <button className={classes.toggler} onClick={() => setOpen(open => !open)}>
          toggle
        </button>
        <div className={classes.basket}>Корзина</div>
        {Object.keys(cart.list).map(burgerId => {
          const burger = burgers.find(burger => +burger.id === +burgerId)

          if (!burger) {
            return null
          }

          return (
            <p>{burger.name}&nbsp;{cart.list[burgerId].count}</p>
          )
        })}
        <BasketHeader />
        {/* <FreeDelivery />
          <Delivery />
          <Box />
          <BasketFooter /> */}
      </div>
    </div>
  )
}
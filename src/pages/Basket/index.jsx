import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BasketHeader } from './BasketHeader'
import { CartItem } from './cart-item'
import { BasketFooter } from './BasketFooter'
import { FreeDelivery } from './FreeDelivery'
import { Box } from './Box'
import { Delivery } from './Delivery'

import path from './photo/cart.png'

import { CART, cartSlice } from '../../store/slices/cart'

import classes from './styles.module.scss'

import clsx from 'clsx'

export const Basket = () => {
  const dispatch = useDispatch()
  const cart = useSelector(CART)

  const handleToggle = useCallback(() => dispatch(cartSlice.actions.toggle()), [dispatch])
 
  return (
    <div className={clsx(classes.backdrop, { [classes.hide]: !cart.opened })}>
      <div className={clsx(classes.cart, { [classes.open]: cart.opened })}>
        <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
          <button className={classes.toggler} onClick={handleToggle}>
            <img src={path} className={classes.icon} />
          </button>
          <div className={classes.basket}>Корзина</div>
          {Object.keys(cart.list).map(id => (
            <CartItem key={`CartItem-${id}`} id={id} />
          ))}
          <BasketHeader />
          <FreeDelivery />
          <Delivery />
          <Box />
          <BasketFooter />
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { Item } from './Item'

import { useSelector } from 'react-redux'

import { CATALOG } from '../../store/slices/catalog'

import classes from './styles.module.scss'

export const Dish = () => {
  const catalog = useSelector(CATALOG)
    .filter(catalog => catalog.recommended)


  return (
    <div className={classes.dish}>
      {catalog.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          photo={item.photo}
          kind={item.kind}
        />
      ))}
    </div>
  )
}
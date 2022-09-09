import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'

import { BURGERS } from '../../store/slices/burgers'

import classes from './styles.module.scss'

export const Burgers = () => {
  const burgers = useSelector(BURGERS)

  return (
    <div className={classes.burgers}>
      {burgers.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          compound={item.compound}
          photo={item.photo}
          weight={item.weight}
        />
      ))}
    </div>
  )
}
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Item } from './Item'

import { CATALOG } from '../../store/slices/catalog'

import classes from './styles.module.scss'

export const Burgers = () => {
  const params = useParams()
  const burgers = useSelector(CATALOG)
    .filter(burger => burger.kind === params.category)

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
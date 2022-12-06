import { Item } from './Item'
import { CATALOG, Product } from '../../store/slices/catalog'

import classes from './styles.module.scss'

import { useSelector } from 'react-redux'
import { FC } from 'react'

export const Dishes = () => {
  const catalog = useSelector(CATALOG)
    .filter(catalog => catalog.status)

  return (
    <div className={classes.dishes}>
      {catalog.map((item, index) => (
        <Item
          key={`${item.id}`}
          name={item.name}
          kind={item.kind}
          photo={item.photo}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  )
}
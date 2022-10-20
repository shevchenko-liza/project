import React from 'react'
import { useSelector } from 'react-redux'
import { generatePath, Link, useParams } from 'react-router-dom'

import { Item } from './Item'
import {Text} from '../Text'
import { CATALOG } from '../../store/slices/catalog'

import classes from './styles.module.scss'
import clsx from 'clsx'

export const Burgers = () => {
  const params = useParams()
  const burgers = useSelector(CATALOG)
    .filter(burger => burger.kind === params.category)

  return (
    <div>
      <div className={clsx('container', classes.buttonBox)}>
        <Link to="/">
          <button type="submit" className={classes.Mainbutton}>Главная</button>
        </Link>
        <Link to={generatePath("/menu_page", { menu_page: 'menu_page' })}>
          <button type="submit" className={clsx(classes.menuButton)}>Меню</button>
        </Link>
        <Link to={generatePath("/menu/burgers")}>
          <button type="submit" className={classes.burgerButton}>Бургеры</button>
        </Link>
      </div>
      <div className={classes.burgers}>
        {burgers.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            compound={item.compound}
            photo={item.photo}
            weight={item.weight}
            price={item.price}
          />
        ))}
      </div>
      <Text/>
    </div>
  )
}
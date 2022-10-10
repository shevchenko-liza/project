import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Item } from './Item'

import { CATALOG } from '../../store/slices/catalog'
import { HeaderStyle } from '../../store/slices/header-styles/component'

import burger from './photo/burgerBackground.jpg'
import classes from './styles.module.scss'

export const Burgers = () => {
  const params = useParams()
  const burgers = useSelector(CATALOG)
    .filter(burger => burger.kind === params.category)

  console.log({ burgers });

  return (
    <div className={classes.burgers}>
            <HeaderStyle height="410px"  background-size={"100%"} background={`url(${burger})`} />
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
  )
}
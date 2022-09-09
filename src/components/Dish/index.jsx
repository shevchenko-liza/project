
import React from 'react'
import { Item } from './Item'

import classes from './styles.module.scss'
import { DISH } from './dishConstants'


export const Dish = () => (
    <div className={classes.dish}>
      {DISH.map((item) => (
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
  
  
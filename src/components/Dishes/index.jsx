import{DISHES} from './mainDish'
import {Item} from './Item'
import classes from './styles.module.scss'

export const Dishes = () => (
    <div className={classes.dishes}>
      {DISHES.map((item, index) => (
        <Item
          key={item.id}
          name={item.name}
         kind={item.kind}
          photo={item.photo}
         price={item.price}
         id={item.id}
          />
        

      ))}
      
    </div>
    
  )
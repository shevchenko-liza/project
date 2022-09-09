import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Basket } from '../../pages/Basket'
import { Dish } from '../../components/Dish'
import { Order } from '../../pages/Burger/Order'
import { Text } from '../../components/Text'

import classes from '../../pages/Burger/styles.module.scss'

import { BURGERS } from '../../store/slices/burgers'

export const BurgerPage = () => {
  const { id } = useParams()

  const burgers = useSelector(BURGERS)
  const burger = burgers.find(burger => burger.id === parseInt(id))

  return (
    <div>
      <div className={classes.burger} >
        <div className={classes.photoBox}>
          <img className={classes.photo} src={burger.burger_photo} alt="" />
        </div>

        <div className={classes.infoBox}>
          <div className={classes.name}>{burger.name}</div>
          <span className={classes.weight}>{burger.weight} </span>
          <div className={classes.text}>{burger.text}</div>
          <span className={classes.price}> {burger.price}</span>
          <Order id={id} />
        </div>

        <div className={classes.border}>
          <span>Состав</span>
          <ul>
            {burger.compound.map(item => (
              <li className={classes.compounds}>{item}</li>
            ))}
          </ul>
        </div>
        <span className={classes.title}>Рекомендуемые блюда</span>
      </div>

      <Basket />
      <Dish />

      <Text />
    </div>
  )

}

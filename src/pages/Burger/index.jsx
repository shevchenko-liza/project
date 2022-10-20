import { generatePath, Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import { Dish } from '../../components/Dish'
import { Order } from '../../pages/Burger/Order'
import { Text } from '../../components/Text'

import classes from '../../pages/Burger/styles.module.scss'

import { CATALOG } from '../../store/slices/catalog'

export const BurgerPage = () => {
  const { id } = useParams()

  const burgers = useSelector(CATALOG)
  const burger = burgers.find(burger => burger.id === parseInt(id))

  if (!burger) {
    return false
  }

  return (
    <div>
      <div className={clsx('container', classes.buttonBox)}>
        <Link to="/">
          <button type="submit" className={classes.Mainbutton}>Главная</button>
        </Link>
        <Link to={generatePath("/:menu_page", { menu_page: 'menu_page' })}>
          <button type="submit" className={clsx(classes.menuButton)}>Меню</button>
        </Link>
        <Link to={generatePath("/menu/burgers")}>
          <button type="submit" className={classes.burgerButton}>Бургеры</button>
        </Link>
      </div>
      <div className={classes.burger}>
        <div>
          <div className={classes.photoBox}>
            <img className={classes.photo} src={burger.burger_photo} alt="" />
          </div>
        </div>
        <div>
          <div className={classes.infoBox}>
            <div className={classes.name}>{burger.name}</div>
            <div className={classes.weight}>{burger.weight} </div>
            <div className={classes.text}>{burger.text}</div>
            <div className={classes.priceBox}>
              <div className={classes.price}> {burger.price}</div>
              <Order id={id} />
            </div>
          </div>
        </div>
        <div className={classes.box}>
          {Array.isArray(burger.compound)
            ? (
              <div className={classes.border}>
                <p className={classes.title}>Состав</p>
                <ul>
                  {burger.compound.map(item => (
                    <li className={classes.compounds}>{item}</li>
                  ))}
                </ul>
              </div>
            )
            : null}
        </div>
      </div>
      <div className={classes.titleDish}>Рекомендуемые блюда</div>
      <Dish />
      <Text />
    </div>
  )

}

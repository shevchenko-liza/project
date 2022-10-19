import { generatePath, Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import { Dish } from '../../components/Dish'
import { Order } from '../../pages/Burger/Order'
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
        <Link to={generatePath("/burgers")}>
          <button type="submit" className={classes.burgerButton}>Бургеры</button>
        </Link>
      </div>
      <div className={classes.burger}>
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
        {Array.isArray(burger.compound)
          ? (
            <div className={classes.border}>
              <span>Состав</span>
              <ul>
                {burger.compound.map(item => (
                  <li className={classes.compounds}>{item}</li>
                ))}
              </ul>
            </div>
          )
          : null}
        <span className={classes.title}>Рекомендуемые блюда</span>
      </div>
      <Dish />
    </div>
  )

}

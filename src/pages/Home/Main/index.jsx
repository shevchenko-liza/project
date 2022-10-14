import main from '../Main/photo/main.jpg'

import classes from '../Main/styles.module.scss'
import clsx from 'clsx'

import { Dishes } from '../../../components/Dishes'
import { generatePath, Link } from 'react-router-dom'




export const Main = () => {
    return (
        <div className={clsx('container', classes.header)}>
            <div className={classes.buttonBox}>
              <button type="submit" className={clsx(classes.button, classes.order)}>Главная</button>
              <Link to={generatePath("/:menu_page", { menu_page: 'menu_page' })}>
              <button type="submit" className={clsx(classes.menuButton, classes.order)}>Меню</button>
              </Link>
              </div>
            <div className={classes.box}>
                <div className={classes.mainText}>Сделай заказ на 399 грн и получи салат «Цезарь» в подарок!</div>
                <div className={classes.mainButton}>
                    <button type="submit" className={clsx(classes.DiscountButton, classes.order)}>Подробнее об акции</button>
                </div>
            </div>
            <span>
                <img src={main} alt="" className={classes.mainPhoto} />
            </span>
            <div className={classes.mainDishes}>Рекомендуемые блюда</div>
            <Dishes />
            
        </div>
    )
}

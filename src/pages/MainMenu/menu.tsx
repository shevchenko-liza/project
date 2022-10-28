import classes from './styles.module.scss'

import clsx from 'clsx'

import burger from './photo/burger.jpg'
import kitchen from './photo/kitchen.jpg'
import firstMeal from './photo/firstMeal.jpg'
import businessMenu from './photo/businessMenu.jpg'
import brazier from './photo/brazier.jpg'
import desserts from './photo/desserts.jpg'
import beverages from './photo/beverages.jpg'

import { generatePath, Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div className={clsx('container', classes.header)}>
            <div className={clsx('container', classes.buttonBox)}>
                <Link to="/">
                    <button type="submit" className={classes.Mainbutton}>Главная</button>
                </Link>
                <Link to={generatePath("/:menu_page", { menu_page: 'menu_page' })}>
                    <button type="submit" className={clsx(classes.menuButton)}>Меню</button>
                </Link>
            </div>
            <div className={classes.top}>
                <div className={classes.burgerBox}>
                    <Link to={generatePath("/menu/burgers")}>
                        <div>
                            <img src={burger} alt="" className={classes.burgerPhoto} />
                        </div>
                    </Link>
                    <span className={classes.bgTitle}>Бургеры</span>
                </div>
                <div className={classes.kitchenBox}>
                    <div>
                        <img src={kitchen} alt="" className={classes.kitchenPhoto} />
                    </div>
                    <span className={classes.khTitle}>Кухня</span>
                </div>
                <div className={classes.mealBox}>
                    <div>
                        <img src={firstMeal} alt="" className={classes.mealPhoto} />
                    </div>
                    <span className={classes.mlTitle}>Первые блюда</span>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.busMenuBox}>
                    <Link to={generatePath("/menu/business-menu")}>
                        <div>
                            <img src={businessMenu} alt="" className={classes.bsMenuPhoto} />
                        </div>
                    </Link>
                    <span className={classes.bsTitle}>Бизнес меню</span>
                </div>
                <div className={classes.brazierBox}>
                    <Link to={generatePath("/menu/brazier")}>
                        <div>
                            <img src={brazier} alt="" className={classes.brazierPhoto} />
                        </div>
                    </Link>
                    <span className={classes.bzTitle}>Мангал</span>
                </div>
                <div className={classes.dessertsBox}>
                    <div>
                        <img src={desserts} alt="" className={classes.dessertsPhoto} />
                    </div>
                    <span className={classes.dsTitle}>Десерты</span>
                </div>
                <div className={classes.beveragesBox}>
                    <div>
                        <img src={beverages} alt="" className={classes.beveragesPhoto} />
                    </div>
                    <span className={classes.bvTitle}>Напитки</span>
                </div>
            </div>
            <div className={classes.title}>Рекомендуемые блюда</div>
        </div>
    )
}
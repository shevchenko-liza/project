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
            <div className={classes.top}>
                <div className={classes.burgerBox}>
                <Link to={generatePath("/menu/burgers")}>
                <span>
                    <img src={burger} alt="" className={classes.burgerPhoto}/>
                    </span>
                    </Link>
                    <p className={classes.bgTitle}>Бургеры</p>            
                </div>

                <div className={classes.kitchenBox}>
                
                    <img src={kitchen} alt="" className={classes.kitchenPhoto}/>
                    
                    <p className={classes.khTitle}>Кухня</p>             
                </div>

                <div className={classes.mealBox}>
                <span>
                    <img src={firstMeal} alt="" className={classes.mealPhoto}/>
                    </span>
                    <p className={classes.mlTitle}>Первые блюда</p>             
                </div>
                </div>
                <div className={classes.box}>
                <div className={classes.busMenuBox}>
                <Link to={generatePath("/menu/business-menu")}>
                <span>
                    <img src={businessMenu} alt="" className={classes.bsMenuPhoto}/>
                    </span>
                    </Link>
                    <p className={classes.bsTitle}>Бизнес меню</p>             
                </div>

                <div className={classes.brazierBox}>
                <Link to={generatePath("/menu/brazier")}>
                <span>
                    <img src={brazier} alt="" className={classes.brazierPhoto}/>
                    </span>
                    </Link>
                    <p className={classes.bzTitle}>Мангал</p>             
                </div>

                <div className={classes.dessertsBox}>
                <span>
                    <img src={desserts} alt="" className={classes.dessertsPhoto}/>
                    </span>
                    <p className={classes.dsTitle}>Десерты</p>             
                </div>

                <div className={classes.beveragesBox}>
                <span>
                    <img src={beverages} alt="" className={classes.beveragesPhoto}/>
                    </span>
                    <p className={classes.bvTitle}>Напитки</p>             
                </div>
                </div>
                <div className={classes.title}>Рекомендуемые блюда</div>
            </div>
    )
}
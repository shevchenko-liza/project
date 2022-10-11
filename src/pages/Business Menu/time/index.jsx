import classes from './styles.module.scss'
import clsx from 'clsx'
import { generatePath, Link } from 'react-router-dom'

export const Time = () => {
    return (
        <div className={classes.top}>
            <div className={classes.block}>
                <div className={classes.Week}> Одна неделя</div>
                <div className={classes.price}>750 грн</div>
            </div>
            <div className={classes.buttonBlock}>
            {/* <Link to={generatePath("/business-menu/:menu_subscription")}> */}
                <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
                {/* </Link> */}
            </div>

            <div className={classes.blocks}>
                <div className={classes.Week}> Две недели</div>
                <div className={classes.price}>1250 грн</div>
            </div>
            <div className={classes.buttonBlock}>
            {/* <Link to={generatePath("/business-menu/:menu_subscription" )}> */}
                <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
                {/* </Link> */}
            </div>

            <div className={classes.blocks}>
                <div className={classes.Week}> Месяц</div>
                <div className={classes.price}>2000 грн</div>
            </div>
            <div className={classes.buttonBlock}>
            {/* <Link to={generatePath("/business-menu/:menu_subscription" )}> */}
                <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export const Order = () => {
    return (
        <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    )
}
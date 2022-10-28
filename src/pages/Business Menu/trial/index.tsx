import classes from './styles.module.scss'
import clsx from 'clsx'

import icon2 from '../photo/icon2.jpg'

export const TrialLunch = () => {
    return (
        <div className={classes.background} >
            <img src={icon2} alt="" className={classes.photo} />
            <div className={classes.border}>
                <div className={classes.order_lunch}>Заказать пробный обед</div>
                <div className={classes.advertising}>Хотите попробовать наши обеды? <br />Закажите пробный бизнес ланч на один день!</div>
                <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
            </div>
        </div>
    )
}
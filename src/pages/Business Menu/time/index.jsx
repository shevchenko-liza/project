import classes from './styles.module.scss'
import clsx from 'clsx'

export const Time = () => {
    return (
        <div className={classes.top}>
            <div className={classes.oneWeek}> Одна неделя</div>
            <div className={classes.price}>750 грн</div>
            <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
            <div className={classes.twoWeeks}> Две недели</div>
            <div className={classes.weeksPrice}>1250 грн</div>
            <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
            <div className={classes.month}> Месяц</div>
            <div className={classes.monthPrice}>2000 грн</div>
            <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
        </div>

    )
}
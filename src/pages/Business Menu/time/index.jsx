import classes from './styles.module.scss'
import clsx from 'clsx'

export const Time = () => {
    return (

            <div className={classes.top}>
                <div className={classes.oneWeek}> Одна неделя</div>
                <div className={classes.price}>750 грн</div>
               
             
                    <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
                
              
                <div className={classes.twoWeeks}> Одна неделя</div>
                <div className={classes.weeksPrice}>750 грн</div>
              <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
              



                <div className={classes.month}> Одна неделя</div>
                <div className={classes.monthPrice}>750 грн</div>
           
                    <button type="submit" className={clsx(classes.buttons, classes.order)}>Заказать</button>
               
            </div>
    
    )
}
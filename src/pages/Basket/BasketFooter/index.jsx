import clsx from 'clsx'

import classes from './styles.module.scss'

export const BasketFooter = () => (
    <span>
        <div className={classes.list}>
            <span className={classes.price}>Стоимость заказа</span>
            <span className={classes.deliveryPrice}>Доставка</span>
            <span className={classes.bonuses}>Бонусы</span>
            <span className={classes.totalPayable}>Итого к оплате</span>
        </div>
        <button type="submit" className={clsx(classes.buttonSubmit, classes.order)}>Оформить заказ</button>
    </span>
)
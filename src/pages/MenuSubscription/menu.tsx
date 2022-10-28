import clsx from 'clsx';

import { generatePath, Link } from 'react-router-dom';

import classes from './styles.module.scss'


export const MenuSub = () => {
    return (
        <div>
            <div className={clsx('container', classes.buttonBox)}>
                <Link to="/">
                    <button type="submit" className={classes.Mainbutton}>Главная</button>
                </Link>
                <Link to={generatePath("/menu_page")}>
                    <button type="submit" className={clsx(classes.menuButton)}>Меню</button>
                </Link>
                <Link to={generatePath("/menu/business-menu")}>
                    <button type="submit" className={classes.bsButton}>Бизнес меню</button>
                </Link>
            </div>
            <div className={clsx('container', classes.header)}>
                <div className={classes.top}>
                    <div className={classes.userBox}>
                        <div>
                            <div className={classes.name}>Имя</div>
                            <input placeholder='Введите своё имя' name='userName ' type='text' className={classes.userName}></input>
                        </div>
                        <div>
                            <div className={classes.phone}>Телефон</div>
                            <input placeholder='(099) 123 45 67' name='userPhone' type='tel' className={classes.userPhone}></input>
                        </div>
                    </div>
                    <div>
                        <div className={classes.email}>E-mail</div>
                        <input placeholder='example@mail.com' name='userEmail' type='text' className={classes.userEmail}></input>
                    </div>
                    <div className={classes.paymentMethod}>
                        <div>
                            <div className={classes.payment}>Способ оплаты</div>
                            <select name="payment" className={classes.options} >
                                <option>Наличными</option>
                                <option>Картой</option>
                            </select>
                        </div>
                        <div>
                            <div className={classes.timeOfDelivery}>Время доставки</div>
                            <select name="text" className={classes.variant} >
                                <option>13:30</option>
                                <option>14:00</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className={classes.address}>Адрес доставки</div>
                        <input placeholder='ул. Рекордная, 14 кирпичная пристройка со стороны улицы Верхняя' name='userAddress ' type='text' className={classes.userAddress}></input>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.block}>
                        <div>
                            <div className={classes.title}>Вид подписки</div>
                            <div className={classes.deliveryBlock}>
                                <div className={classes.oneWeek}>
                                    <input type="radio" />одна неделя
                                </div>
                                <div className={classes.twoWeek}>
                                    <input type="radio" />
                                    две недели
                                </div>
                                <div className={classes.month}>
                                    <input type="radio" />
                                    месяц
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className={classes.NumberOfSets}>Количество комплектов</div>
                            <select name="text" className={classes.sets} >
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className={classes.comments}>Комментарии</div>
                        <input placeholder='Комментарии к заказу' type='text' className={classes.userComments} ></input>
                    </div>
                    <div className={classes.setBlock}>
                        <div>
                            <div className={classes.set}>5 комплектов</div>
                            <div className={classes.total}>Итого к оплате</div>
                        </div>
                        <div>
                            <div className={classes.price}>750 грн</div>
                            <div className={classes.totalPrice}>3750 грн</div>
                        </div>
                    </div>
                    <button type="submit" className={clsx(classes.buttonSubmit, classes.order)}>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}
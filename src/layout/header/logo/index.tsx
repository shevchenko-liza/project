import classes from './styles.module.scss'
import clsx from 'clsx'

import search from './photo/search.png'
import phone from './photo/phone.jpg'
import logo from './photo/logo.jpg'
import clock from './photo/Clock.png'
import facebook from './photo/facebook.png'
import instagram from './photo/instagram.png'
import delet from './photo/deletSearch.png'
import deletSearch from './photo/deletSearch.png'
import React, { useState } from 'react'
import back from './photo/back.png'
import { Search } from '../../search'

import background from './photo/background.jpg'
import button_search from './photo/button_search.jpg'

export const Logo = () => {
    let [cart, setCart] = useState(false)
    let [open, hide] = useState(false)
    return (
        <div className={classes.header}>
            <div className={classes.iconBox}>
                <img src={phone} alt='' className={classes.phone} />
                <div className={classes.phoneNumber}>(066) 451-36-74</div>
                <div onClick={() => setCart(cart = !cart)} className={classes.backCall} >Заказать обратный звонок</div>
                {cart && (
                    <div className={classes.form}>

                        <div className={classes.formBlock}>
                            <div className={classes.block}>
                                <input placeholder='Ваше имя' name='userName ' type='text' className={classes.userName}></input>
                                <input placeholder='Ваш телефон' name='userPhone' type='tel' className={classes.userPhone}></input>
                                <button type="submit" className={classes.button}>Заказать обратный звонок</button>
                            </div>
                        </div>
                        <img src={delet} alt="" className={classes.button_delet} />
                        <img src={search} alt="" className={classes.backgroundBlock} />
                    </div>
                )}
                <img src={logo} alt="" className={classes.logo} />
                <img src={clock} alt="" className={classes.clock} />
                <div className={classes.time}>Работаем с 10:00 до 20:00</div>
                <img src={facebook} alt="" className={classes.facebook} />
                <img src={instagram} alt="" className={classes.instagram} />
                <img src={button_search} alt="" onClick={() => hide(open = !open)} className={classes.button_search} />
                {open && (
                    <div className={classes.searchBlock}>
                        <div className={classes.top}>
                            <Search />
                        </div>
                    </div>
                )}
            </div>
            <img src={search} alt="" className={classes.search} />
        </div>

    )
}
import { useDispatch } from 'react-redux'
import classes from './styles.module.scss'
import clsx from 'clsx'

import search from '../photo/search.png'
import phone from '../photo/phone.jpg'
import logo from '../photo/logo.png'
import clock from '../photo/Clock.png'
import facebook from '../photo/facebook.png'
import instagram from '../photo/instagram.png'
import delet from '../photo/deletSearch.png'
import React, { useCallback } from 'react'
import back from '../photo/back.png'
import { Search } from '../../search'

import background from '../photo/background.jpg'
import button_search from '../photo/button_search.jpg'
import { callbackSlice } from '../../../store/slices/callback'
import {searchSlice } from '../../../store/slices/search'

export const Logo = () => {
  const dispatch = useDispatch()
  const handleOpenCallback = useCallback(() => dispatch(callbackSlice.actions.open()), [])
  const handleOpenSearch = useCallback(() => dispatch(searchSlice.actions.open()), [])
  return (
    <div className={clsx('container', classes.header)}>
      <img src={search} className={classes.search} />
      <div className={classes.iconBox}>
        <div className={classes.phoneBox}>
          <a href="tel:">
            <img src={phone} alt='' className={classes.phone} />
          </a>
          <a href="tel:">
            <div className={classes.userPhone}>(066) 451-36-74</div>
          </a>
    
        <button type="submit" onClick={handleOpenCallback} className={classes.Callback}>Заказать обратный звонок</button >
        </div>
        <div className={classes.box}>
          <img src={logo} alt="" className={classes.logo} />
        </div> 
        <div className={classes.timeBlock}>
          <img src={clock} alt="" className={classes.clock} />
          <div className={classes.time}>Работаем с 10:00 до 20:00</div>
        </div>
        <div className={classes.socialNetworksBlock}>
          <img src={facebook} alt="" className={classes.facebook} />
          <img src={instagram} alt="" className={classes.instagram} />
          <button  className={classes.searchBox}  onClick={handleOpenSearch}>
          <img src={button_search} alt="" className={classes.button_search} />
          </button >
        </div>
      </div>
    </div>
  )
}
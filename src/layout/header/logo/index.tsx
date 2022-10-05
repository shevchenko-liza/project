import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
import { SearchToggler } from '../../search/toggler'

import background from '../photo/background.jpg'
import button_search from '../photo/button_search.jpg'
import { callbackSlice } from '../../../store/slices/callback'
import { searchSlice } from '../../../store/slices/search'

import classes from './styles.module.scss'

export const Logo = () => {
  const dispatch = useDispatch()
  const handleToggleCallback = useCallback(() => dispatch(callbackSlice.actions.toggle()), [dispatch])

  return (
    <div className={clsx('container', classes.header)}>
      <img src={search} className={classes.search} alt="" />
      <div className={classes.iconBox}>
        <div className={classes.phoneBox}>
          <a href="tel:">
            <img src={phone} alt='' className={classes.phone} />
          </a>
          <a href="tel:">
            <div className={classes.userPhone}>(066) 451-36-74</div>
          </a>

          <button type="submit" onClick={handleToggleCallback} className={classes.Callback}>Заказать обратный звонок</button >
        </div>
        <Link to="/" className={classes.box}>
          <img src={logo} alt="" className={classes.logo} />
        </Link>
        <div className={classes.timeBlock}>
          <img src={clock} alt="" className={classes.clock} />
          <div className={classes.time}>Работаем с 10:00 до 20:00</div>
        </div>
        <div className={classes.socialNetworksBlock}>
          <img src={facebook} alt="" className={classes.facebook} />
          <img src={instagram} alt="" className={classes.instagram} />
          <SearchToggler />
        </div>
      </div>
    </div>
  )
}
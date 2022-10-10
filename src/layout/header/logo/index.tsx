import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

import search from '../photo/search.png'
import phone from '../photo/phone.jpg'
import logo from '../photo/logo.png'
import clock from '../photo/Clock.png'
import facebook from '../photo/facebook.png'
import instagram from '../photo/instagram.png'
import border from '../photo.oval.jpg'

import { SearchToggler } from '../../search/toggler'
import { callbackSlice } from '../../../store/slices/callback'
import { CallBackToggler } from '../callback/toggler'

import classes from './styles.module.scss'

export const Logo = () => {
  const dispatch = useDispatch()


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
          <CallBackToggler />
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
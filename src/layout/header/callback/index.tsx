
import clsx from 'clsx'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { topFormSlice } from '../../../store/slices/top-form'

import deletSearch from '../photo/deletSearch.png'

import classes from './styles.module.scss'

export const Callback = () => {
  const dispatch = useDispatch()

  const handleClose = useCallback(() => dispatch(topFormSlice.actions.close()), [dispatch])


  return (
    <div className={classes.wrapper}>
      <form className={clsx('container', classes.form)}>
        <input placeholder='Ваше имя' name='userName ' type='text' className={classes.userName}></input>
        <input placeholder='Ваш телефон' name='userPhone' type='tel' className={classes.userPhone}></input>
        <button type="submit" onClick={handleClose} className={classes.button}>Заказать обратный звонок</button>
        <button type="reset" className={classes.button_delet} onClick={handleClose}>
          <img src={deletSearch} alt="" width="20px" height="20px" />
        </button>
      </form>
    </div>
  )
}
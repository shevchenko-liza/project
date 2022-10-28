import classes from './styles.module.scss'
import form from '../photo/form.jpg'
import clsx from 'clsx'
import background from '../photo/background.jpg'
import { FC } from 'react'
export const Form = () => {
  return (
    <div>
    <div className={classes.formBlock}>
      <div className={classes.formBox}>
        <img src={form} alt="#" className={classes.form} />
        <div className={classes.formTitle}>Заказать столик</div>
        <form className={classes.bookTable}>
          <div className={classes.dateForm}>
            <p className={classes.date}>Дата</p>
            <select name="date" className={classes.options} >
              <option>29 сентября</option>
              <option>30 сентября</option>
            </select>
          </div>
          <div className={classes.timesForm}>
            <p className={classes.times}>Время</p>
            <select name="time" className={classes.time} >
              <option>14:30</option>
              <option>15:00</option>
            </select>
          </div>
          <div>
            <p className={classes.place}>Количество мест</p>
            <select name="places" className={classes.places} >
              <option>5</option>
              <option>15</option>
            </select>
          </div>
          <div className={classes.nameForm}>
            <p className={classes.name}>Имя</p>
            <input placeholder='Введите своё имя' name='userName ' type='text' className={classes.userName}></input>
          </div>
          <div className={classes.phoneForm}>
            <p className={classes.phone}>Телефон</p>
            <input placeholder='(099) 123 45 67' name='userPhone' type='tel' className={classes.userPhone}></input>
          </div>
          <button type="submit" className={clsx(classes.button, classes.order)}>Оставить заявку</button>
        </form>
      </div>
      </div>
      <div className={classes.bottomBackground}>
        <img src={background} className={classes.background}/>
      </div>
    </div>
  )
}              
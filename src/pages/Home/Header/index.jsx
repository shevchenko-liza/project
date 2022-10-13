import clsx from 'clsx'

import classes from '../Header/styles.module.scss'

import { Link, generatePath } from 'react-router-dom'

export const HomeHeader = () => {
   return (
      <div>
         <div className={clsx('container', classes.header)}>
            <div className={classes.title}>Лучший ресторан Запорожья с доставкой в любой район города</div>
            <div className={classes.mainButtons}>
               <button type="submit" className={clsx(classes.button, classes.order)}>Доставка</button>
               <Link to={generatePath("restaurant")}>  <button type="submit" className={clsx(classes.button, classes.order)}>Ресторан</button></Link>
            </div>
         </div>

      </div>
   )
}
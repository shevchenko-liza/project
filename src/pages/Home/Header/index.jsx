
import clsx from 'clsx'
import icon1 from '../Header/photo/video.png'
import classes from '../Header/styles.module.scss'
import { Link, generatePath } from 'react-router-dom'

export const HomeHeader = () => {
   return (
      <div>
         <div className={classes.iconBox}>
            <img src={icon1} alt="" className={classes.photo} />
         </div>
         <div className={clsx('container', classes.header)}>
            <div className={classes.text}>Лучший ресторан Запорожья с доставкой в любой район города</div>
            <div className={classes.mainButton}>
               <button type="submit" className={clsx(classes.button, classes.order)}>Доставка</button>
               <Link to={generatePath("restaurant")}>  <button type="submit" className={clsx(classes.button, classes.order)}>Ресторан</button></Link>
            </div>
         </div>

      </div>
   )
}
import { useParams } from "react-router-dom"
import { BURGERS } from "../../components/Burgers/constants"
import classes from '../../pages/Burger/styles.module.scss'
import {Basket} from '../../pages/Basket'
import {Dish} from '../../components/Dish'
import{Order} from '../../pages/Burger/Order'
import {Text} from '../../components/Text'
export const BurgerPage = () => {
    const {id} = useParams()
   const burger = BURGERS.find(burger => burger.id === parseInt(id))
   console.log(burger)
    return (
      <div>
        <div className={classes.burger} >
          <div className={classes.photoBox}>
           <img className={classes.photo} src={burger.burger_photo} alt="" />
           </div>
           
        <div className={classes.infoBox}>
        <div className={classes.name}>{burger.name}</div> 
        <span className={classes.weight}>{burger.weight} </span> 
        <div className={classes.text}>{burger.text}</div>
        <span className={classes.price}> {burger.price}</span>
          <Order id={id} />
      </div>
      
        <ul className={classes.border}>
          <li className={classes.compounds}>Состав {burger.compounds}</li>
        </ul>
          <span className={classes.title}>Рекомендуемые блюда</span>
      </div>

      <Basket/>
        <Dish/>
  
        <Text/>
      </div>
    )
    
}

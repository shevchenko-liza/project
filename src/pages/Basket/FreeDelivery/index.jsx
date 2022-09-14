import classes from './styles.module.scss'
import icon1 from'../FreeDelivery/photo/delivery-truck.jpg'
import icon2 from '../FreeDelivery/photo/phon1.jpg'
export const FreeDelivery=()=>{
    return(
        <div>
          <div className={classes.background}>
            <img src={icon2} alt="" className={classes.greenBack}/>
          
            <div className={classes.textDelivery}>
          <div className={classes.text}>Закажи еще на 123 грн и получи бесплатную доставку!</div>
          </div>
<div className={classes.cart}>
    <img src={icon1} alt="" className={classes.car}/>
</div>
        </div>
        </div>
    )
}
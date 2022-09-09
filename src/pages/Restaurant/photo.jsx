
import classes from './styles.module.scss'
import icon1 from './photo/phon.jpg'
import icon2 from './photo/icon2.jpg'
import icon3 from './photo/icon3.jpg'
import icon4 from './photo/icon4.jpg'
import icon5 from './photo/icon5.jpg'
import icon6 from './photo/icon6.jpg'
import icon7 from './photo/icon7.jpg'
import icon8 from './photo/icon8.jpg'
import icon9 from './photo/icon9.jpg'
import icon10 from './photo/icon10.jpg'

export const Photo=()=>{
    return(
        <div>
        <img src={icon1} alt="" className={classes.phon}/>

<div className={classes.box}>
<img src={icon2} alt="" className={classes.photo}/>
</div>
<div className={classes.iconBox}>
<img src={icon3} alt="" className={classes.photos}/>
<img src={icon4} alt="" className={classes.photos}/>
<img src={icon5} alt="" className={classes.photos}/>
<img src={icon6} alt="" className={classes.photos}/>
<img src={icon7} alt="" className={classes.photos}/>
<img src={icon8} alt="" className={classes.photos}/>
<img src={icon9} alt="" className={classes.photos}/>
<img src={icon10} alt="" className={classes.photos}/>
</div>
</div>
    )
}
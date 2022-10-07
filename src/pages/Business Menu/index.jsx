import classes from './styles.module.scss'
import { useParams } from "react-router-dom"
import main from './photo/phone.jpg'
import icon1 from './photo/icon1.jpg'
import { Text } from './text'
import {Time} from './time'
import clsx from 'clsx'
import { HeaderStyle } from '../../store/slices/header-styles/component'
export const BusinessMenu = () => {
    const { business_menu } = useParams()
    console.log({ business_menu });

    return (
        <div >
                        <HeaderStyle height="410px" width="100%" background={`url(${main})`} />
            <div className={classes.boxTitle}>
                <div className={classes.title}>Бизнес меню</div>
            </div>
            <div className={classes.block}>
                <div className={classes.part}>
                    <div className={classes.business_menu}>
                        <img src={icon1} alt="#" className={classes.picture} />
                        <Text />
                        <Time/>
                        </div>
                        
                   
                </div>  
                </div>
                 <Text />
        </div>

    )
}
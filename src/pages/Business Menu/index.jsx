import { Text } from './text'
import {Basket} from '../Basket'

import found from './photo/phone.jpg'

import icon1 from './photo/icon1.jpg'

import classes from './styles.module.scss'

export const BusinessMenu = () => (
    <div >
        <div className={classes.boxTitle}>
            <div className={classes.title}>Бизнес меню</div>
        </div>

        <span className={classes.iconBox}>
            <img src={found} alt="#" className={classes.found} />

        </span>
        <div className={classes.block}>
            <div className={classes.part}>
                <div className={classes.business_menu}>
                    <img src={icon1} alt="#" className={classes.picture} />
                    <Text />
                </div>
<Basket/>
            </div>
        </div>
    </div>
)

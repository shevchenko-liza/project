import classes from './styles.module.scss'

import clsx from 'clsx'

import { useParams } from "react-router-dom"

import main from './photo/phone.jpg'
import icon1 from './photo/icon1.jpg'


import { Text } from '../../components/Text'
import { Time } from './time'
import {TrialLunch} from './trialLunch'

import { HeaderStyle } from '../../store/slices/header-styles/component'


export const BusinessMenu = () => {
    const { business_menu } = useParams()
    console.log({ business_menu });

    return (
        <div >
            <HeaderStyle height="410px" background={`url(${main}) no-repeat center/100% `} />
            <div className={clsx('container')}>
                <div className={classes.block}>
                    <div className={classes.iconBox}>
                        <img src={icon1} alt="#" className={classes.picture} />
                    </div>
                    <div className={classes.menu_block}>
                        <div className={classes.menu_title}>Бизнес меню</div>
                        <div className={classes.menu_text}>У нас можно заказать бизнес-ланч с доставкой в ​​офис. Для этого заранее свяжитесь с нами, чтобы мы успели позаботиться о вашем обеде.<br /><br />
                            Согласитесь, ведь стоит лишь человеку хорошо поесть в обеденное время – как он сразу же становится добрее и даже дела начинают идти в гору! Поэтому можно с уверенностью сказать, что бизнес-ланч – это еще и инвестиция в производительность.<br /><br />
                            Меню бизнес-ланчей меняется так, чтобы не надоедать нашим гостям и соответствовать сезону.
                        </div>
                    </div>
                    <Time />
                </div>
            </div>
            <TrialLunch/>
            <Text/>
        </div>

    )
}


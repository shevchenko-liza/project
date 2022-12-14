import classes from './styles.module.scss'

import clsx from 'clsx'

import { generatePath, Link, useParams } from "react-router-dom"

import icon1 from './photo/icon1.jpg'

import { Time } from './time'
import { Text } from '../../components/Text'
import { TrialLunch } from './trial'
import { Dishes } from '../../components/Dishes'

type Key = {
    key: any
}

export const bisMenu = ({ key }: Key) => (
    <ul>
        {key.map((item: any) =>
            <li key={item.id} >
            </li>
        )}
    </ul>
)

export const BusinessMenu = () => {
    const { business_menu } = useParams()
    console.log({ business_menu });
    return (
        <div >
            <div className={clsx('container')}>
                <div className={clsx('container', classes.buttonBox)}>
                    <Link to="/">
                        <button type="submit" className={classes.Mainbutton}>Главная</button>
                    </Link>
                    <Link to={generatePath("/menu_page")}>
                        <button type="submit" className={clsx(classes.menuButton)}>Меню</button>
                    </Link>
                    <Link to={generatePath("/menu/business-menu")}>
                        <button type="submit" className={classes.bsButton}>Бизнес меню</button>
                    </Link>
                </div>
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
            <TrialLunch />
            <div className={clsx('container', classes.title)}>Рекомендуемые блюда</div>
            <Dishes />
            <Text />
        </div>
    )
}

// interface ItemProps extends Omit<Product, 'burger_photo' | 'text' | 'recommended' | 'status' | 'weight' | 'compound' | 'id' |'photo'|'name'> { }


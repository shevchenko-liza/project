import { HomeHeader } from '../../pages/Home/Header'
import { Main } from '../../pages/Home/Main'
import { Basket } from '../Basket'
import { HeaderStyle } from '../../store/slices/header-styles/component'

import icon from '../Home/Main/photo/video.png'

import classes from './styles.module.scss'


export const HomePage = () => {

    return (
        <div>
            <HeaderStyle height="900px"  background={`url(${icon})  no-repeat center/100% ` }/>
            <HomeHeader />
            <Main />
            <Basket />
        </div>
    )
}
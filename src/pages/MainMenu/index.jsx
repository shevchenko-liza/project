import { useParams } from "react-router-dom"
import { Dish } from "../../components/Dish"
import {Menu} from './menu' 

import clsx from "clsx"

import classes from './styles.module.scss'

export const MainMenu = () => {
    const { menu_page } = useParams()
    console.log(menu_page)
    return (
        <div className={clsx('container')}>
        <Menu/>
      
        <Dish/>
        </div>
    )
}
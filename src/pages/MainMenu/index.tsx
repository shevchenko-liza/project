import { useParams } from "react-router-dom"

import { Dish } from "../../components/Dish"
import { Menu } from './menu'
import { Text } from '../../components/Text'

import clsx from "clsx"

export const MainMenu = () => {
    const { menu_page } = useParams()
    console.log(menu_page)
    return (
        <div className={clsx('container')}>
            <Menu />
            <Dish />
            <Text />
        </div>
    )
}

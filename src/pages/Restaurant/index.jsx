import { useParams } from "react-router-dom"

import background from './photo/background.jpg'
import clsx from "clsx"

import classes from './styles.module.scss'
import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form/form.jsx'

export const Restaurant = () => {
    const { restaurant } = useParams()
    console.log(restaurant)
    return (
        <div>
            <Photo />
            <Text />
            <Form />
        </div>
    )
}
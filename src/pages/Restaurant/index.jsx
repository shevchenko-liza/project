// import clsx from "clsx"
// import { useParams } from "react-router-dom"

import { HeaderStyle } from '../../store/slices/header-styles/component'

import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form/form.jsx'

// import background from './photo/background.jpg'

import main from './photo/main.jpg'

// import classes from './styles.module.scss'

export const Restaurant = () => {
    // const { restaurant } = useParams()

    return (
        <div>
            <HeaderStyle height="300px" background={`url(${main})`} />
            <Photo />
            <Text />
            <Form />
        </div>
    )
}
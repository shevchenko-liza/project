import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form/form.jsx'

import map from './photo/map.jpg'

import classes from './styles.module.scss'

export const Restaurant = () => (
    <div>
        <Photo />
        <Text />
        <Form />
        <img src={map} className={classes.map} />
    </div>
)
import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form/form'

import mapp from './photo/map.jpg'

import classes from './styles.module.scss'

type KeyRest = {
    key: any
}

export const rest = ({ key }: KeyRest) => (
    <ul>
        {key.map((item:any) =>
            <li key={item.id} >
            </li>
        )}
    </ul>
)

export const Restaurant = () => {
    return (
        <div>
            <Photo />
            <Text />
            <Form />
            <img src={mapp} className={classes.map} />
        </div>
    )
}


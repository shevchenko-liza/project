import { Main } from './Main'
import { Text } from '../../components/Text'

import map from './photo/map.jpg'

import classes from './styles.module.scss'

export const HomePage = () => (
    <div>
        <Main />
        <Text />
        <img src={map} className={classes.map} />
    </div>
)
import { useParams } from "react-router-dom"

import background from './photo/background.jpg'
import clsx from "clsx"

import classes from './styles.module.scss'
import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form'

export const Restaurant = () => {
    const { restaurant } = useParams()
    console.log(restaurant)
    return (

        <div >
            <div className={classes.block}>
                <div className={classes.title}>Ресторан</div>
            </div>
           
            <Photo />
            <Text />
            <Form />

            <img src={background} alt="" className={clsx(classes.phon, classes.background)} />
          
        </div>



    )
}

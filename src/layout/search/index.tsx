import classes from './styles.module.scss'

import background from './photo/background.jpg'
import button_search from './photo/button_search.jpg'

export const Search = () => {
    return (
        <div className={classes.header}>
            <div className={classes.box}>
<img src={background} className={classes.background}/>
    </div>
<input placeholder='Введите название блюда или ингридиента, например Четыре сыра' className={classes.search}></input>   

  

        </div>
    )
}
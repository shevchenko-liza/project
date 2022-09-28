import classes from './styles.module.scss'
import { CATALOG_TABLE } from '../../store/slices/catalog'
import background from './photo/background.jpg'
import button_search from './photo/button_search.jpg'
import products from '../../../server/db/catalog.json'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { response } from 'express'

import { Item } from "../../components/Burgers/Item"

//const product = useSelector(CATALOG_TABLE)

export const Search = () => {
//    const [search, setSearch] = useState([])



   /* const getProduct = () => {
        product.then((response) => {
            setSearch(response.data)
        })
    }

    useEffect(() => {
        getProduct()
    }, [])

    const [value, setValue] = useState('')

    const productFiltration = search.filter(product => {
        return product.name.toLowerCase().includes(value.toLowerCase())
    })
*/
    return (
        <div className={classes.header}>
            <div className={classes.box}>
                <img src={background} className={classes.background} />
            </div>
            <input
                type="text"
                placeholder='Введите название блюда или ингридиента, например Четыре сыра'
                className={classes.search}>
               onChange={(event) => setValue(event.target.value)}
            </input>
          
          <div className={classes.product}>

                {
                    productFiltration.map((name) => {
                        return (
                            <Item name={name} />
                        )
                    })
                }
            </div>
        
        </div>
    )
}





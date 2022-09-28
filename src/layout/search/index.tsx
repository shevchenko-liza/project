import classes from './styles.module.scss'
import { CATALOG_TABLE, Product } from '../../store/slices/catalog'
import background from './photo/background.jpg'
import button_search from './photo/button_search.jpg'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { response } from 'express'

import { Item } from "../../components/Burgers/Item"

export const Search = () => {
  const [search, setSearch] = useState<Product[]>([])
  const product = useSelector(CATALOG_TABLE)
  const getProduct = () => {
    // product.then((response) => {
    //     setSearch(response.data)
    // })
  }

  useEffect(() => {
    getProduct()
  }, [])

  const [value, setValue] = useState('')

  const productFiltration = search.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className={classes.header}>
      <div className={classes.box}>
        <img src={background} className={classes.background} />
      </div>
      <input
        type="text"
        placeholder='Введите название блюда или ингридиента, например Четыре сыра'
        className={classes.search}
        onChange={(event) => setValue(event.target.value)}
      />

      <div className={classes.product}>
        {
          productFiltration.map((product) => {
            return (
              <Item
                compound={product.compound}
                weight={product.weight}
                photo={product.photo}
                id={product.id}
                price={product.price}
                name={product.name}
              />
            )
          })
        }
      </div>
    </div>
  )
}





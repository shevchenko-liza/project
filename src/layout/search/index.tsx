import classes from './styles.module.scss'
import { CATALOG, Product } from '../../store/slices/catalog'
import background from './photo/background.jpg'
import button_search from './photo/button_search.jpg'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { response } from 'express'
import iconSearch from './photo/button_search.jpg'

import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchSlice } from '../../store/slices/search'


export const Search = () => {
  const dispatch = useDispatch()

  const handleClose = useCallback(() => dispatch(searchSlice.actions.close()), [dispatch])
  const [search, setSearch] = useState<Product[]>([])
  const product = useSelector(CATALOG)
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
    <div className={classes.background}>
    <div className={clsx( classes.wrapper)}>
      <input
        type="text"
        placeholder='Введите название блюда или ингридиента, например Четыре сыра'
        className={clsx( classes.search, classes.box)}
        onChange={(event) => setValue(event.target.value)}
      />
       <button type="reset" className={classes.icon} onClick={handleClose}>
        <img src={iconSearch} className={classes.iconSearch}/>
       </button>
      <div className={classes.product}>
        {
          productFiltration.map((product) => {
            return (
            <>
                photo={product.photo}
                name={product.name}
            </>
              
            
            )
          })
        }
      </div>
    </div>
    </div>
  )
}





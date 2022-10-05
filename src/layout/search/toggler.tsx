import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { topFormSlice, TopForm } from '../../store/slices/top-form'

import button_search from './photo/button_search.jpg'

import classes from './styles.module.scss'

export const SearchToggler = () => {
  const dispatch = useDispatch()

  const handleOpenSearch = useCallback(() => dispatch(topFormSlice.actions.open(TopForm.SEARCH)), [dispatch])

  return (
    <button className={classes.searchBox} onClick={handleOpenSearch}>
      <img src={button_search} alt="" className={classes.button_search} />
    </button>
  )
}
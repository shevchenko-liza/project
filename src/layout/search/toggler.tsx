import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { topFormSlice, TopForm, TOP_FORM_VARIANT } from '../../store/slices/top-form'

import button_search from './photo/button_search.jpg'
import deleteIcon from './photo/deletSearch.png'

import classes from './styles.module.scss'

export const SearchToggler = () => {
  const dispatch = useDispatch()
  const opened = useSelector(TOP_FORM_VARIANT) === TopForm.SEARCH

  const handleToggleSearch = useCallback(() => dispatch(topFormSlice.actions.toggle(TopForm.SEARCH)), [dispatch])

  return (
    <button className={classes.searchBox} onClick={handleToggleSearch}>
      {opened ? (
        <img src={deleteIcon} alt="" className={classes.button_search} />
      ) : (<img src={button_search} alt="" className={classes.button_search} />)}

    </button>
  )
}
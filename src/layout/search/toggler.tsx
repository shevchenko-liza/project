import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { topFormSlice, TopForm, TOP_FORM_VARIANT } from '../../store/slices/top-form'

import classes from './styles.module.scss'

export const SearchToggler = () => {
  const dispatch = useDispatch()
  const opened = useSelector(TOP_FORM_VARIANT) === TopForm.SEARCH

  const handleToggleSearch = useCallback(() => dispatch(topFormSlice.actions.toggle(TopForm.SEARCH)), [dispatch])

  return (
    <button className={classes.searchBox} onClick={handleToggleSearch}>
      {opened ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7628 10.0028L19.6188 2.14644C19.9434 1.83299 20.0735 1.36882 19.9593 0.932334C19.845 0.495847 19.5042 0.154969 19.0677 0.0407186C18.6312 -0.073532 18.167 0.0566243 17.8536 0.381162L9.99719 8.23722L2.14113 0.381162C1.6521 -0.0971268 0.869252 -0.0928155 0.385521 0.39083C-0.0982105 0.874476 -0.10266 1.65733 0.375542 2.14644L8.23191 10.0028L0.375542 17.8592C0.0542953 18.1734 -0.0733184 18.636 0.0414005 19.0704C0.156119 19.5049 0.49547 19.8442 0.92995 19.9588C1.36443 20.0735 1.827 19.9458 2.14113 19.6245L9.99719 11.7684L17.8536 19.6245C18.0973 19.8682 18.4169 19.9902 18.7362 19.9902C19.0555 19.9902 19.3754 19.8682 19.6188 19.6245C20.1062 19.1369 20.1062 18.3467 19.6188 17.8592L11.7628 10.0028Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5745 13.2889L19.7339 18.4482C19.9938 18.7082 20.0715 19.0992 19.9308 19.4389C19.7901 19.7786 19.4586 20 19.0909 20C18.8498 20.0002 18.6185 19.9044 18.4482 19.7336L13.2889 14.5743C11.8891 15.6941 10.1136 16.3636 8.18182 16.3636C3.66318 16.3636 0 12.7005 0 8.18182C0 3.66318 3.66318 0 8.18182 0C12.7007 0 16.3636 3.66318 16.3636 8.18182C16.3666 10.0383 15.7354 11.8401 14.5745 13.2889ZM1.81818 8.18182C1.81818 11.6964 4.66727 14.5455 8.18182 14.5455C11.6966 14.5455 14.5455 11.6964 14.5455 8.18182C14.5455 4.66727 11.6966 1.81818 8.18182 1.81818C4.66727 1.81818 1.81818 4.66727 1.81818 8.18182Z" fill="currentColor" />
        </svg>
      )}
    </button>
  )
}
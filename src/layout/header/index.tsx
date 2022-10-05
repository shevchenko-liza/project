import { useSelector } from 'react-redux'

import { CALLBACK_OPENED } from '../../store/slices/callback'

import { SEARCH_OPENED } from '../../store/slices/search'

import { Logo } from '../header/logo'
import { Search } from '../search'
import { Callback } from './callback'
import classes from './styles.module.scss'
export const Header = () => {
  const callbackOpened = useSelector(CALLBACK_OPENED)
  const searchOpened = useSelector(SEARCH_OPENED)

  return (
    <>
    
    
      <header className={classes.header}>
      {callbackOpened ? <Callback />:null}
      {searchOpened ? <Search />:null}
        <Logo />
      </header>
    </>
  )
}
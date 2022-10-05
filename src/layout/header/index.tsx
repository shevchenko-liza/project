import { useSelector } from 'react-redux'

import { HEADER_STYLE } from '../../store/slices/header-styles'

import { Logo } from '../header/logo'
import { TopForm } from '../top-form'

import classes from './styles.module.scss'

export const Header = () => {
  const headerStyle = useSelector(HEADER_STYLE)

  return (
    <>
      <TopForm />
      <header className={classes.header} style={headerStyle}>
        <Logo />
      </header>
    </>
  )
}
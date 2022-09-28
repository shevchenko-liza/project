import { useSelector } from 'react-redux'

import { CALLBACK_OPENED } from '../../store/slices/callback'

import { Logo } from '../header/logo'
import { Callback } from './callback'

export const Header = () => {
  const callbackOpened = useSelector(CALLBACK_OPENED)

  return (
    <>
      {callbackOpened ? <Callback /> : null}
      <header >
        <Logo />
      </header>
    </>
  )
}
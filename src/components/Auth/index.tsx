import classes from './styles.module.scss'
import authh from './photo/auth.png'
import { FC, useCallback } from 'react'
import { AUTH, authSlice } from '../../store/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { App } from '../Auth/Form/App'

export const Auth = () => {
    const dispatch = useDispatch()
    const auth = useSelector(AUTH)

    const handleToggle = useCallback(() => dispatch(authSlice.actions.toggle()), [dispatch])

    return (
        <div>
            {/* <div className={clsx(classes.backdrop, { [classes.hide]: <App /> })}>
                <div className={clsx(classes.auth, { [classes.open]: <App /> })}> */}
                    <div className={classes.box}>
                        <button className={classes.toggler} onClick={handleToggle}>
                            <img src={authh} className={classes.icon} />
                        </button>
                    </div>
                {/* </div>
            </div> */}
        </div>
    )
}
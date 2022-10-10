import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TopForm, topFormSlice } from '../../../store/slices/top-form'

import classes from './styles.module.scss'

export const CallBackToggler = () => {
    const dispatch = useDispatch()
    const handleToggleCallback = useCallback(() => dispatch(topFormSlice.actions.toggle(TopForm.CALLBACK)), [dispatch])

    return (
        <div>
            <button type="submit" onClick={handleToggleCallback} className={classes.buttonToggler}>Заказать обратный звонок</button>
        </div>
    )
}
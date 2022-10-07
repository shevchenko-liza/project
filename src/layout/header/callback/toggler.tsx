import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TopForm, topFormSlice } from '../../../store/slices/top-form'

import classes from './styles.module.scss'

export const CallBackToggler = () => {
    const dispatch = useDispatch()
    const handleOpenSearch = useCallback(() => dispatch(topFormSlice.actions.open(TopForm.CALLBACK)), [dispatch])

    return (
        <div>
            <button type="submit" onClick={handleOpenSearch} className={classes.buttonToggler}>Заказать обратный звонок</button>
        </div>
    )
}
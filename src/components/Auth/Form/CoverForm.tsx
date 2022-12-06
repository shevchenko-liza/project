import { ReactNode } from "react"

import classes from './styles.module.scss'

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function CoverForm({ title, children }: FormWrapperProps) {
    return (
        <div className={classes.box}>
            <h1 className={classes.title}> {title}</h1>
            <div className={classes.form}>{children}</div>
        </div>
    )
}


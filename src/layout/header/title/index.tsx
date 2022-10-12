import { FC, ReactNode } from "react"

import classes from './styles.module.scss'

interface TitleProps {
  children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => (
  <h1 className={classes.root}>{children}</h1>
)
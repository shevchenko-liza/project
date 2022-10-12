import { useParams } from 'react-router-dom';

import classes from './styles.module.scss'

export const MenuSubscription = () => {
  const { menu_subscription } = useParams()
  console.log({ menu_subscription });

  return (
    <div className={classes.header}>
      <div>dplcdcu</div>
    </div>
  )
}
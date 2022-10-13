import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { Dishes } from '../../components/Dishes';
import { MenuSub } from './menu';
import classes from './styles.module.scss'

export const MenuSubscription = () => {
  const { menu_subscription } = useParams()
  console.log({ menu_subscription });

  return (
    <div className={clsx('container')}>
     
        <MenuSub />
        <div className={classes.recommendedDishes}>Рекомендуемые блюда</div>
        <Dishes />
     
      
    </div>
  )
}
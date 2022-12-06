import clsx from 'clsx';

import { useParams } from 'react-router-dom';

import { Dishes } from '../../components/Dishes';
import { MenuSub } from './menu';
import { Text } from '../../components/Text'
import classes from './styles.module.scss'

type Key = {
  key: any
}

export const menSubKey = ({ key }: Key) => (
  <ul>
    {key.map((item: any) =>
      <li key={item.menSub} >
      </li>
    )}
  </ul>
)

export const MenuSubscription = () => {
  const { menu_subscription } = useParams()
  console.log({ menu_subscription });
  return (
    <div className={clsx('container')}>
      <MenuSub />
      <div className={classes.recommendedDishes}>Рекомендуемые блюда</div>
      <Dishes/>
      <Text />
    </div>
  )
}
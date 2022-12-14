import classes from '../styles.module.scss'
import { useDispatch } from 'react-redux'

import { cartSlice } from '../../../store/slices/cart'

import { FC, useCallback, useState } from 'react'
import clsx from 'clsx'
import { Product } from '../../../store/slices/catalog'

type OrderProps = {
  id: number | `${number}`
};

export const Order: FC<OrderProps> = ({ id }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);
  const decrease = useCallback(() => setAmount((amount) => amount - 1), []);
  const increase = useCallback(() => setAmount((amount) => amount + 1), [])

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setAmount(parseFloat(event.target.value))
  }, [])

  const handleSubmit = useCallback((event: any) => {
    event.preventDefault()

    dispatch(cartSlice.actions.set({ id, count: amount }))
  }, [amount, id, dispatch])

  return (
    <div className={classes.block}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.inputBox}>
          <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
          <input type="text" size={3} className={classes.input} value={amount} onChange={handleChange} />
          <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
        </div>
        <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
      </form>
    </div>
  )
}

interface ItemProps extends Omit<Product, 'burger_photo' | 'text' | 'recommended' | 'status' | 'weight' | 'compound'> { }

export const Item: FC<ItemProps> = ({ name, price, photo, id, kind, key }) => (
  <div>
    <div className={classes.infoBox}>
      <img className={classes.photo} src={photo} alt="" />
      <div className={classes.kind}>{kind}</div>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>{price}</div>
      <div>{key}</div>
      <Order id={id} />
    </div>
  </div>
)
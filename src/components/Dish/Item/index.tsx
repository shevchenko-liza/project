import { FC, SetStateAction, useCallback, useState } from 'react'
import clsx from 'clsx'
import classes from '../styles.module.scss'
import { useDispatch } from 'react-redux'

import { cartSlice } from '../../../store/slices/cart'
import { Product } from '../../../store/slices/catalog'
import { generatePath, Link } from 'react-router-dom'

export const Order: FC<Pick<Product, 'id'>> = ({ id }) => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0);
  const decrease = useCallback(() => setAmount((amount) => amount - 1), []);
  const increase = useCallback(() => setAmount((amount) => amount + 1), [])

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setAmount(parseFloat(event.target.value))
  }, [])

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(cartSlice.actions.set({ id, count: amount }))
  }, [amount, id, dispatch])
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputBox}>
        <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
        <input type="text" size={3} className={classes.input} value={amount} onChange={handleChange} />
        <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
      </div>
      <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    </form>
  )
}

interface ItemProps extends Omit<Product, 'burger_photo' | 'text' | 'recommended' | 'status' | 'weight' | 'compound'> { }

export const Item: React.FC<ItemProps> = ({ key, name, price, photo, id, kind }) => (
  <div>
    <div className={classes.infoBox}>
      <div className={classes.icon}>
        <img className={classes.photo} src={photo} alt="" />
      </div>
      <div>{key}</div>
      <div className={classes.kind}>{kind}</div>
      <Link to={generatePath("/:id", { id: id !== undefined ? `${id}` : undefined })} className={classes.name}>{name} </Link>
      <div className={classes.price}>{price}</div>
      <Order id={id} />
    </div>
  </div>
)
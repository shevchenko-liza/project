import { ChangeEventHandler, FC, SetStateAction, useCallback, useState } from 'react'

import clsx from 'clsx'

import { useDispatch, useSelector } from 'react-redux'
import { Link, generatePath } from 'react-router-dom'

import { cartSlice } from '../../../store/slices/cart'
import { Product } from '../../../store/slices/catalog'

import classes from '../styles.module.scss'

interface ItemProps {
  id: number | `${number}`
  };
    
export const Order:FC<ItemProps> = ({ id }) => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0);
  const decrease = useCallback(() => setAmount((amount) => amount - 1), []);
  const increase = useCallback(() => setAmount((amount) => amount + 1), [])

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event ) => {
    setAmount(parseFloat(event.target.value))
  }, [])

  const handleSubmit = useCallback((event:React.FormEvent<HTMLFormElement> ) => {
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

export const Item:React.FC<Omit<Product, 'burger_photo' | 'text'>> = ({ name, compound, weight, photo, id, price,key }) => (
  <div className={classes.item}>
    <div className={classes.photoBox}>
      <img className={classes.photo} src={photo} alt="" />
    </div>
    <div className={classes.infoBox}>
      <Link to={generatePath("/burgers/:id",{ id: id!==undefined ? `${id}`: undefined })} className={classes.name}>{name} </Link>
      <p className={classes.compound}>Состав: {(Array.isArray(compound) ? compound : []).join(', ')}</p>
      <span className={classes.weight}>{weight}</span>
      <div className={classes.price}>{price}</div>
      <div className={classes.key}>{key}</div>
      <Order id={id} />
    </div>
  </div>
)
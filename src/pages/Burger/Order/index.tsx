import React, { FC, SetStateAction, useCallback, useState } from 'react'

import clsx from 'clsx'

import classes from '../Order/styles.module.scss'

interface OrderProps {
  id: number | `${number}`
}

export const Order: FC<OrderProps> = ({ id }) => {
  const [amount, setAmount] = useState(0);
  const decrease = useCallback(() => setAmount((amount) => amount - 1), []);
  const increase = useCallback(() => setAmount((amount) => amount + 1), [])

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setAmount(parseFloat(event.target.value))
  }, [])

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({ amount, id })
  }, [amount, id])

  return (
    <div className={classes.top}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.inputBox}>
          <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
          <input type="text" size={3} className={classes.input} value={amount} onChange={handleChange} />
          <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
        </div>
      </form>
      <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    </div>
  )
}



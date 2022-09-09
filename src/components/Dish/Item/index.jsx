import { useCallback, useState } from 'react'
import clsx from 'clsx'
import classes from '../styles.module.scss'

export const Order = ({id}) => {
  const [amount, setAmount] = useState(0);
  const decrease= useCallback(()=>setAmount((amount) => amount-1) ,[]);
  const increase= useCallback(()=>setAmount((amount) => amount+1) ,[])

  const handleChange = useCallback(event => {
    setAmount(event.target.value)
  }, [])

  const handleSubmit = useCallback(event => {
    event.preventDefault()

    console.log({amount,id })
  }, [amount,id])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputBox}>
        <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
        <input type="text" size="3"    className={classes.input} value={amount} onChange={handleChange} />
        <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
      </div>
      <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    </form>
  )
}

export const Item = ({ name, price, photo,id,kind }) => (
    <div> 
        <div className={classes.infoBox}>
        <img className={classes.photo} src={photo} alt="" />
        <div className={classes.kind}>{kind}</div>
    <div className={classes.name}>{name}</div>
     <div className={classes.price}>{price}</div>
    <Order id={id} />
    </div>
   
    </div>
)
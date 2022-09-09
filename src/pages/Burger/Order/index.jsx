import { useCallback, useState } from 'react'
import clsx from 'clsx'
import classes from '../Order/styles.module.scss'
import icon1 from './photo/background.png'
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
        <div>
        
      <form className={classes.form} onSubmit={handleSubmit}>
      <span >
        <img  src={icon1} alt="" className={classes.greenPhon}  />
        </span>
      <div className={classes.inputBox}>
          <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
          <input type="text" size="3"    className={classes.input} value={amount} onChange={handleChange} />
          <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
        </div>
        <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
      
        </form>
        </div>
    )
    
  }



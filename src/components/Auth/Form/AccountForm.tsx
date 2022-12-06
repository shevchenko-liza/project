import { CoverForm } from "./CoverForm"

import classes from './styles.module.scss'

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {

  return (
    <CoverForm title="Account Creation">
      <label className={classes.name} >Email</label>
      <input className={classes.formblock} type="email" value={email} onChange={e => updateFields({ email: e.target.value })} autoFocus required />

      <label className={classes.name}>Password</label>
      <input className={classes.formblock} type="password" value={password} onChange={e => updateFields({ password: e.target.value })} required />
    </CoverForm>
  )
}
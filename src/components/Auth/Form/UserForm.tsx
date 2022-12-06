import { CoverForm } from "./CoverForm"
import classes from './styles.module.scss'


type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {

  return (
    <CoverForm title="User Details">
      <label className={classes.name} >First Name</label>
      <input className={classes.formblock} type="text" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} required />

      <label className={classes.name}>Last Name</label>
      <input className={classes.formblock} type="text" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} required />

      <label className={classes.name}>Age</label>
      <input className={classes.formblock} min={1} type="number" value={age} onChange={e => updateFields({ age: e.target.value })} required />
    </CoverForm>
  )
}
import { CoverForm } from "./CoverForm"

import classes from './styles.module.scss'

type AddressData = {
  street: string
  city: string
  state: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export const AddressForm = ({
  street,
  city,
  state,
  updateFields,
}: AddressFormProps) => {

  return (
    <CoverForm title="Address">
      <label className={classes.name}>Street</label>
      <input className={classes.formblock} type="text" value={street} onChange={e => updateFields({ street: e.target.value })} autoFocus required />

      <label className={classes.name}>City</label>
      <input className={classes.formblock} type="text" value={city} onChange={e => updateFields({ city: e.target.value })} required />

      <label className={classes.name}>State</label>
      <input className={classes.formblock} type="text" value={state} onChange={e => updateFields({ state: e.target.value })} required />
    </CoverForm>
  )
}
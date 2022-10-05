import { useSelector } from "react-redux"

import { TOP_FORM_VARIANT, TopForm as ETopForm } from "../../store/slices/top-form"

import { Callback } from '../header/callback'
import { Search } from '../search'

export const TopForm = () => {
  const topForm = useSelector(TOP_FORM_VARIANT)

  switch (topForm) {
    case ETopForm.CALLBACK:
      return <Callback />
    case ETopForm.SEARCH:
      return <Search />
    default:
      return null
  }
}
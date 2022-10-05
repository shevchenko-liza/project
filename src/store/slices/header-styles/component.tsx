import { CSSProperties, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerStyleSlice } from ".";

export const HeaderStyle: FC<CSSProperties> = (style) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerStyleSlice.actions.set(style))

    return () => {
      dispatch(headerStyleSlice.actions.unset())
    }
  }, [dispatch, style])

  return null
}
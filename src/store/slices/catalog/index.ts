import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import _keyBy from 'lodash/keyBy'

type ID = number | `${number}`

export interface Product {
    id: ID,
    name: string
    photo: string
    burger_photo: string
    weight: string
    text: string
    price: string
    compound: string[]
    kind: string
    recommended: boolean
}

interface CatalogState {
    list: Product[]
    table: {
        [id in ID]: Product
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        list: [],
        table: {},
    } as CatalogState,
    reducers: {
        setList(state, action: PayloadAction<Product[]>) {
            state.list = action.payload
            state.table = _keyBy(action.payload, 'id')
        }
    }
})

interface State {
    [catalogSlice.name]: CatalogState
}

export const CATALOG = (state: State) => state[catalogSlice.name].list
export const CATALOG_TABLE = (state: State) => state[catalogSlice.name].table
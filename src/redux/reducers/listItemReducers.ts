import { createSlice } from '@reduxjs/toolkit'
import { EStatus } from '../../enum/status'
import { IList } from '../../interface/list'

export interface IListItemState {
    name: string
    amount: number
    participants: number
}

const initialState = {
    name: '',
    amount: 0,
    participants: 0
}

const slice = createSlice({
    name: 'ListItem',
    initialState,
    reducers: {
        updateAmount: (state: IListItemState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.amount = action.payload
        },
        updateListTitle: (state: IListItemState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.name = action.payload
        },
        updateListParicipants: (state: IListItemState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.participants = action.payload
        },
    },
})

export const { actions, reducer } = slice;
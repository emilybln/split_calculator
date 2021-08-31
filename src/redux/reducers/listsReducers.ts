import { createSlice } from '@reduxjs/toolkit'
import {IList} from '../../interface/list'

export interface IAllListsState {
    lists: IList[]
}

const initialState = {
    lists: []
}

const slice = createSlice({
    name: 'allLists',
    initialState,
    reducers: {
        addList: (state: IAllListsState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.lists = [...state.lists, action.payload]
        },
        removeList: (state: IAllListsState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.lists = state.lists.filter((list, id) => id !== action.payload)
        },
    },
})

export const { actions, reducer } = slice;

import { createSlice } from '@reduxjs/toolkit'

export interface IAllListsState {
    lists: string[]
}

const initialState = {
    lists: []
}

const slice = createSlice({
    name: 'allLists',
    initialState,
    reducers: {
        updateList: (state: IAllListsState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.lists = action.payload
        },
    },
})

export const { actions, reducer } = slice;

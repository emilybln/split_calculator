import { createSlice } from '@reduxjs/toolkit'
import { EStatus } from '../../enum/status'
import { IList } from '../../interface/list'

export interface IAppConfigState {
    status: EStatus
    lists: IList[]
}

const initialState = {
    status: EStatus.INIT,
    lists: [],
}

const slice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        updateStatus: (state: IAppConfigState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.status = action.payload
        },
        updateLists: (state: IAppConfigState, action): void => {
            // eslint-disable-next-line no-param-reassign
            state.lists = action.payload
            // eslint-disable-next-line no-param-reassign
            state.status = EStatus.IDLE
        },
    },
})

export const { actions, reducer } = slice;

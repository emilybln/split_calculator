import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../interface/list'
import { participantInput } from '../../components/page-details-list/styles'

export interface IAllListsState {
  lists: IList[]
}

const initialState: IAllListsState = {
  lists: [],
}

const slice = createSlice({
  name: 'allLists',
  initialState,
  reducers: {
    addList: (state: IAllListsState, action: PayloadAction<IList>): void => {
      // eslint-disable-next-line no-param-reassign
      state.lists = [...state.lists, action.payload]
    },
    removeList: (state: IAllListsState, action: PayloadAction<number>): void => {
      // eslint-disable-next-line no-param-reassign
      state.lists = state.lists.filter((list) => list.id !== action.payload)
    },
    addParticipant: (state: IAllListsState, action: PayloadAction<IList>): void => {
      const index = state.lists.findIndex((list) => list.id === action.payload.id)
      // eslint-disable-next-line no-param-reassign
      state.lists[index] = action.payload
      // eslint-disable-next-line no-param-reassign
      state.lists = [...state.lists]
    },
  },
})

export const { addList, removeList, addParticipant } = slice.actions

export default slice.reducer

// TODO: à quoi sert la classe ?
// export class ListReducers {}

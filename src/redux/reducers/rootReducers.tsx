import { combineReducers, createSelector } from '@reduxjs/toolkit'
import { createSelectorHook } from 'react-redux'
import listsReducers from './listsReducers'

const rootReducer = combineReducers({
  listsReducers,
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState>()

export default rootReducer

import { IList } from '../interface/list'
import { RootState } from '../redux/reducers/rootReducers'

export const selectLists = (state: RootState): IList[] => state.listsReducers.lists
console.log('selectLists')

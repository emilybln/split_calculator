import { RootState } from '../redux/reducers/rootReducers'

// TODO: comment utiliser avec 2 param
export const selectListParticipants = (state: RootState, id: number): string[] =>
  state.listsReducers.lists[id].participants

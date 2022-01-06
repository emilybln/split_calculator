import { selectLists } from '../selectors/listsSelector'
import { useTypedSelector } from '../redux/reducers/rootReducers'

export const useCurrentListInfo = (targetId: number) => {
  console.log('useCurrent func')
  const lists = useTypedSelector(selectLists)
  return lists.find((list) => list.id === targetId)
}

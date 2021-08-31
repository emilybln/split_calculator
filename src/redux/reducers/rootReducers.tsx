import {IListItemState, reducer as listItemReducers} from './listItemReducers'
import {IAllListsState, reducer as listsReducers} from './listsReducers'


export default {
    listItemReducers,
    listsReducers
}

export interface IState {
    listItemReducers : IListItemState
    listsReducers : IAllListsState
}


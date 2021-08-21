import { IAppConfigState, reducer as appConfigReducers,
} from "./appConfigReducers"
import {IListItemState, reducer as listItemReducers} from './listItemReducers'
import {IAllListsState, reducer as listsReducers} from './listsReducers'


export default {
    appConfigReducers,
    listItemReducers,
    listsReducers
}

export interface IState {
    appConfigReducers: IAppConfigState,
    listItemReducers : IListItemState
    listsReducers : IAllListsState
}


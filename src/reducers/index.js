import { combineReducers } from 'redux'

import buttonReducer from './buttonReducer'
import {itemsHasErrored,itemsIsLoading, items} from './items'

export default combineReducers({
    buttonReducer,
    itemsHasErrored,
    itemsIsLoading,
    items
})

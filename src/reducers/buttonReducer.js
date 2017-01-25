import * as types from '../constants/ActionTypes'
const initialState = {clicked:false};

 const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUTTON_CLICKED_START:
            return Object.assign({}, state, {clicked: true});
        default:
            return state
    }
}
export default buttonReducer;
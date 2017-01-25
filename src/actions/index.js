import * as types from '../constants/ActionTypes';

const buttonClickedAction = buttonAction => {
      return { type: types.BUTTON_CLICKED + "_" + buttonAction};
}

export default buttonClickedAction;
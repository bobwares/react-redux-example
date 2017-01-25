import buttonClickedAction  from './index';
import * as types from '../constants/ActionTypes';

test('should return action', () => {
    const action = buttonClickedAction("TEST");
    expect(action.type).toEqual(types.BUTTON_CLICKED + "_" + "TEST");

    console.log(action);
});
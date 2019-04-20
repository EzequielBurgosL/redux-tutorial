import { CHANGE_COLOR } from '../actions/colorAction';

const defaultState = {
  color: 'red'
}

const colorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case  CHANGE_COLOR:
      const { color } = action.payload;
      return { ...state, color };
    default:
      return state;
  }
}

export {
  colorReducer
}
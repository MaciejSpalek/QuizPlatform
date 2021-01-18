import { StatusesTypes } from '../Types/statusesTypes'

type StatusesState = {
  addQuizButtonStatus: boolean;
  hamburgerStatus: boolean;
}

const initialState: StatusesState = {
  addQuizButtonStatus: false,
  hamburgerStatus: false,
}

export const statusesReducer = (state = initialState, action: any): StatusesState => {
  switch (action.type) {
    case StatusesTypes.SET_HAMBURGER_STATUS: {
      return {
        ...state,
        hamburgerStatus: action.payload
      }
    }

    case StatusesTypes.SET_ADD_QUIZ_BUTTON_STATUS: {
      return {
        ...state,
        addQuizButtonStatus: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
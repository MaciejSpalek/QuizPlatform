import { QuizTypes } from '../Types/quizTypes'
import { Quiz } from '../../Interfaces/quizInterfaces'


type QuizState = {
    allQuizes: Quiz[]
    userQuizes: Quiz[]
    formPageCounter: number
}

const initialState: QuizState = {
    allQuizes: [],
    userQuizes: [],
    formPageCounter: 1
  }

export const quizReducer = (state = initialState, action: any): QuizState => {
    switch (action.type) {
        case QuizTypes.FETCH_ALL_QUIZES: {
          return {
            ...state,
            allQuizes: action.payload
          }
        }

        case QuizTypes.FETCH_USER_QUIZES: {
          return {
            ...state,
            userQuizes: action.payload
          }
        }

        case QuizTypes.SET_FORM_PAGE_COUNTER: {
          return {
            ...state,
            formPageCounter: action.payload
          }
        }

      default: {
        return state;
      }
    }
  }
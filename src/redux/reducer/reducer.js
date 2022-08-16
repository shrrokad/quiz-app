const INITIAL_STATE = {
    user: []
}

const INITIAL_STATE_ANSWER = {
    answer: []
}

export const stateReducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload, '---->');
    switch (action.type) {
        case "ADD_USERDATA":
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default:
            return state
    }

}

export const answerReducer = (state = INITIAL_STATE_ANSWER, action) => {
    // console.log(action.payload, '---->');           
    switch (action.type) {
        case "ADD_ANSWER":
            return {
                ...state,
                answer: [...state.answer, action.payload]
            }
            case "UPDATE_ANSWER":
            // console.log(action.payload, '-->state');
            const updateAnswer = state.answer.map((answer) => answer?.id === action.payload?.id ? action.payload : answer)
            // console.log(updateAnswer, '--->updateAnswer');
            // state.answer = updateAnswer;
            return {
                ...state,
                answer: updateAnswer
            }
        default:
            return state
    }

}


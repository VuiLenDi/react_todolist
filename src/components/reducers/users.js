import {
    USER_FETCH_REQUESTED,
    USER_FETCH_SUCCEEDED,
    USER_FETCH_FAILED
} from '../actions'

const users = (state = [], action) => {
    switch (action.type) {
        case USER_FETCH_SUCCEEDED:
            console.log("State hien tai : ", state)
            console.log(action.user.users)

            return [
                ...state,
                {
                    users: action.user.users,
                    msg: action.user.msg
                }
            ]

        case USER_FETCH_FAILED:
            return [
                ...state,
                action.msg
            ]
        case USER_FETCH_REQUESTED:
        default:
            return state
    }
}

export default users
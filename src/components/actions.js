/*
    Actions are payloads of information that send data from your application to your store.
    They are the only source of information for the store.
    You send them to the store using store.dispatch()
 */

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED'
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

/*
    Actions must have a type property that indicates the type of action being performed.
    Types should typically be defined as string constants.
    Once your app is large enough, you may want to move them into a separate module
 */

let nextTodoId = 0;

export function addTodo(text) {
    return { type: ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function fetchUser() {
    return { type: USER_FETCH_REQUESTED }
}

export function fetchUserSuccess(result) {
    return { type: USER_FETCH_SUCCEEDED, result}
}

export function fetchUserFailed(msg) {
    return { type: USER_FETCH_FAILED, msg}
}
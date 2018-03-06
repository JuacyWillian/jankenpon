/*
 * action types
 */
 
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
} 
/*
 * action creators
 *  
 * example:
 * 
 * export function actionFunctionName(*args){
 *   return { type: TYPE_ACTION_NAME, *args }
 * }
 * 
 */

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}


/**
 * reducers
 */

function todoApp(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_ACTIVE:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}
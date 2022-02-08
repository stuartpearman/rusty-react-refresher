import types from './types.js';

export function bugsReducer (state = [], action) {
    if (action.type === types.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description
            }
        ];
    } else if (action === types.BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.payload.id);
    } else {
        return state;
    }
}

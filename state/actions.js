import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './types.js';

// action creator
export const bugAdded = payload => ({
    type: BUG_ADDED,
    payload
});

export const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload: {
        id
    }
});

export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
});
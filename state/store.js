import { configureStore } from '@reduxjs/toolkit';
import bugsReducer from './reducers';

export const store = configureStore({
    reducer: {
        bugs: bugsReducer,
    }
});

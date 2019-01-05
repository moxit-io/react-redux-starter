import { combineReducers } from 'redux';

/**
 * Add reducers here.
 * e.g.
 * import users from './users';
 * import jobs from './jobs';
 * const rootReducer = combineReducers({
 *  users,
 *  jobs,
 * });
 *
 *  export default rootReducer;
 */

const rootReducer = combineReducers({
    state: () => ({ test: 'Hello store!' })
});

export default rootReducer;

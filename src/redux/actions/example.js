import { EXAMPLE_ACTION, EXAMPLE_ACTION1 } from './types';

/**
 * Add action and action creators in their separate file
 */

export const triggerExampleAction = payload => ({
    type: EXAMPLE_ACTION,
    payload
});

export const triggerExampleAction1 = payload => ({
    type: EXAMPLE_ACTION1,
    payload
});

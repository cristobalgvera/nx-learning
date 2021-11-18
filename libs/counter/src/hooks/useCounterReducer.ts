import { useReducer } from 'react';
import type { CounterAction, CounterState } from '../types/counter';

const defaultInitialState: CounterState = {
  count: 0,
};

function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + (action.payload ?? 1) };
    case 'decrement':
      return { ...state, count: state.count - (action.payload ?? 1) };
    default:
      return state;
  }
}

export const useCounterReducer = (initialState = defaultInitialState) =>
  useReducer(counterReducer, initialState);

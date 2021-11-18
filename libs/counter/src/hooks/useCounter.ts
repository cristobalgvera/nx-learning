import { useCounterReducer } from './useCounterReducer';

export const useCounter = (initialValue = 0) => {
  const [state, dispatch] = useCounterReducer({ count: initialValue });

  const incrementCount = (amount?: number) =>
    dispatch({ type: 'increment', payload: amount });
  const decrementCount = (amount?: number) =>
    dispatch({ type: 'decrement', payload: amount });

  return { state, actions: { incrementCount, decrementCount } };
};

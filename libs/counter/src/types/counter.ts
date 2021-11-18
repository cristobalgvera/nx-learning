type ActionType = 'increment' | 'decrement';
type ActionPayload = number;

export type CounterAction = {
  type: ActionType;
  payload?: ActionPayload;
};

export type CounterState = {
  count: number;
};

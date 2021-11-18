import { useCounter } from '../hooks/useCounter';
import styles from './Counter.module.scss';

interface CounterProps {
  initialCount?: number;
}

export function Counter({ initialCount }: CounterProps) {
  const {
    state: { count },
    actions: { incrementCount, decrementCount },
  } = useCounter(initialCount);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter</h1>
      <div data-testid="counter" className={styles.counter}>
        {count}
      </div>
      <div className={styles['button-container']}>
        <button
          data-testid="decrement-button"
          className={styles.button}
          onClick={() => decrementCount()}
        >
          -
        </button>
        <button
          data-testid="increment-button"
          className={styles.button}
          onClick={() => incrementCount()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

import styles from './index.module.scss';
import { Counter } from '@nx-learning/counter';

export function Index() {
  return (
    <div className={styles.page}>
      <Counter />
      <Counter initialCount={5} />
    </div>
  );
}

export default Index;

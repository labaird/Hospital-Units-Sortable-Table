import styles from './App.module.css';
import {UnitsContainer} from './units/UnitsContainer';

export function App() {
  return (
    <div className={styles.App}>
      <h1>Census Snapshot</h1>
      <UnitsContainer />
    </div>
  );
}

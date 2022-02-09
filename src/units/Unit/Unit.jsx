import styles from './Unit.module.css';
import {setAlarmStyle} from '../setAlarmStyle';

export function Unit (props) {
  const {alarm, unit} = props;
  const {name, id, capacity, census} = unit;
  const style = setAlarmStyle(styles, alarm);

  return (
    <tr className={style}>
      <td>{name}</td>
      <td>{id}</td>
      <td>{capacity}</td>
      <td>{census}</td>
    </tr>
  );
}
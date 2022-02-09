import styles from './UnitsTable.module.css';
import {useMemo, useState} from 'react';
import {UnitsTableButton} from './UnitsTableButton/UnitsTableButton';
import {Unit} from "../Unit/Unit";
import {getAlarm} from '../getAlarm';
import {sortUnits} from '../sortUnits';

export function UnitsTable (props) {
  const {units} = props;
  const [sort, setSort] = useState('name');
  const [ascending, setAscending] = useState(true);
  const sortedUnits = useMemo(() => {
    return sortUnits(units, sort, ascending);
  }, [units, sort, ascending]);

  function sortTable (column) {
    if (column === sort) {
      setAscending(!ascending)
    } else {
      setSort(column);
      setAscending(true);
    }
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>
            <UnitsTableButton
              label="name"
              sortTable={sortTable}
              sortColumn={sort}
              ascending={ascending}
            >
              Name
            </UnitsTableButton>
          </td>
          <td>
            <UnitsTableButton
                label="id"
                sortTable={sortTable}
                sortColumn={sort}
                ascending={ascending}
              >
                Id
              </UnitsTableButton>
          </td>
          <td>
            <UnitsTableButton
              label="capacity"
              sortTable={sortTable}
              sortColumn={sort}
              ascending={ascending}
            >
            Capacity
            </UnitsTableButton>
          </td>
          <td>
            <UnitsTableButton
              label="census"
              sortTable={sortTable}
              sortColumn={sort}
              ascending={ascending}
            >
              Census
            </UnitsTableButton>
          </td>
        </tr>
      </thead>
      <tbody>
        {sortedUnits.map((unit) => {
          const {id, census, highAlarm, lowAlarm} = unit;

          return (
            <Unit key={id} unit={unit} alarm={getAlarm(census, highAlarm, lowAlarm)}/>
          );
        })}
      </tbody>
    </table>
  );
}
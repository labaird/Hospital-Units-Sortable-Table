import downArrow from '../../../assets/downArrow.svg';
import upArrow from '../../../assets/upArrow.svg';
import styles from './UnitsTableButton.module.css';

// Button needs to know
// - How to trigger a sort
// - active sort
// - sort direction
// - column

export function UnitsTableButton (props) {
  //onclick, needs to tell table to re-sort the units and re-render the table
  const {sortTable, label, ascending, sortColumn, children} = props;

  let arrow = downArrow;
  let className = styles.sortButton;

  if (label === sortColumn) {
    className = className + ' ' + styles.show;
    
    if (!ascending) {
      arrow = upArrow;
    }
  }

  function handleClick (event) {
    sortTable(label)
  }

  return (
    <button className={className} onClick={handleClick}>
      {children}
      <img alt="arrow" src={arrow} />
    </button>
  );
}
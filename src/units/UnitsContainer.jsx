import React, {useState, useEffect} from 'react';
// import {fetchUnits} from '../queries/fetchUnits';
import {UnitsTable} from './UnitsTable/UnitsTable';
import {mockUnits} from '../mockData/mockUnits';

export function UnitsContainer () {
  const [units, setUnits] = useState([]);

/*
  placeholder for a query to a simple API (see queries folder)
  useEffect(() => {
    fetchUnits().then(setUnits);
  }, []);
*/

  useEffect(() => {
    setUnits(mockUnits);
  });

  return (
      <UnitsTable units={units}/>
  );
}
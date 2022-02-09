export function sortUnits (units, parameter, ascending = true) {
  units = [...units];

  if (units.length === 0) {
    return (ascending && units) || units.reverse();
  }
  
  if (parameter === 'name') {
    units = units.sort(sortStrings(parameter))
    return (ascending && units) || units.reverse();
  }

  units = units.sort(sortNumbers(parameter));
  return (ascending && units) || units.reverse();
}

function sortStrings(parameter) {
  return function (unit1, unit2) {
    const string1 = unit1[parameter].toUpperCase();
    const string2 = unit2[parameter].toUpperCase();

    if (string1 < string2) {
      return -1;
    }

    if (string1 > string2) {
      return 1;
    }

    return 0;
  };
}

function sortNumbers(parameter) {
  return function (unit1, unit2) {
    return unit1[parameter] - unit2[parameter];
  };
}

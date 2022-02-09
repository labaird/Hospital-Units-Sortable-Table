export function setAlarmStyle (styles, alarm) {
  if (alarm === 'high') {
    return styles.highAlarm;
  } else if (alarm === 'low') {
    return styles.lowAlarm;
  } else {
    return styles.noAlarm;
  }
}
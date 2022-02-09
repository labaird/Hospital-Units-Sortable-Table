export function getAlarm (census, highAlarm, lowAlarm) {
  if (census >= highAlarm && highAlarm) {
    return 'high';
  }
  if (census <= lowAlarm && lowAlarm) {
    return 'low'
  }
  
  return 'none';
}
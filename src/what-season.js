import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  console.log(date)
  if (!date) { return 'Unable to determine the time of year!'}
  const month = date.getMonth()
  // if (!month || typeof(month) !== 'number' || month < 0 || month > 11) { throw Error({ message: 'Invalid date!' }) }
  return month == 11 || month <= 1 ? 'winter' : month <= 4 ? 'spring' : month <= 7 ? 'summer' : 'autumn'
}

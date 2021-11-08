import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 */
export default function getSeason(date) {
  try {
    if (!date) { return 'Unable to determine the time of year!'}
    const isValidDate = date instanceof Date && !isNaN(date)
    if ( !isValidDate ) { throw new Error('Invalid date!') }
    const month = date.getMonth()
    return month == 11 || month <= 1 ? 'winter' : month <= 4 ? 'spring' : month <= 7 ? 'summer' : 'autumn'
  } catch (error) {
    throw new Error('Invalid date!')
  }
}
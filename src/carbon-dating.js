// import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(+sampleActivity) || +sampleActivity == 0 ) {return false}
  const sample = +sampleActivity
  const ln = Math.log(2)
  const HALF_LIFE_PERIOD = 5730
  const MODERN_ACTIVITY = ln / HALF_LIFE_PERIOD
  const res = Math.ceil( Math.log(15 / sample) / MODERN_ACTIVITY )
  return res > 0 ? res : false
}

console.log(dateSample('')); //13305
import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

  constructor() {
    this.count = 1
  }

  calculateDepth(arr) {
    console.log(arr)
    if (!Array.isArray(arr)) { return 0 }
    if (arr.some(el => {
      return Array.isArray(el)
    })) {
      this.count++
      return this.calculateDepth(arr.flat())
    } else {
      const res = this.count
      this.count = 1
      return res
    }
  }

}
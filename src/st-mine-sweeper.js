import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  return matrix.map((row, rowNum) => {
    return row.map((el, colNum) => {
      const leftEdge = colNum - 1 < 0 ? 0 : colNum - 1
      const rightEdge = colNum + 2 > 3 ? 3 : colNum + 2
      const topRow = matrix[rowNum-1] ? matrix[rowNum-1].slice(leftEdge,rightEdge).filter(el=>el).length : 0
      const curRow = [ matrix[rowNum][colNum-1] , matrix[rowNum][colNum + 1] ].filter(el=>el).length
      const botRow = matrix[rowNum+1] ? matrix[rowNum+1].slice(leftEdge,rightEdge).filter(el=>el).length : 0
      return topRow + curRow + botRow
    })
  })
}

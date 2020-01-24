import {
  addNumber
} from '../js/util'

describe('addNumber', () => {
  it('引数で渡した値がたされるべき', () => {
    expect(addNumber(1, 2)).toEqual(3)
  })
})

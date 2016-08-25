import expect, { createSpy } from 'expect'
import createOnDrop from '../createOnDrop'
import { dataKey } from '../createOnDragStart'

describe('createOnDrop', () => {
  it('should return a function', () => {
    expect(createOnDrop())
      .toExist()
      .toBeA('function')
  })

  it('should return a function that calls change with result from getData', () => {
    const change = createSpy()
    const getData = createSpy().andReturn('bar')
    const preventDefault = createSpy()
    createOnDrop('foo', change)({
      dataTransfer: { getData },
      preventDefault
    })
    expect(getData)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith(dataKey)
    expect(change)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith('bar')
    expect(preventDefault)
      .toHaveBeenCalled()
  })

})

import chai from 'chai'

chai.should()

describe ('Test', () => {
  it ('should return the index of given number', () => {
    [ 1, 2, 3 ].indexOf(1).should.equal(0)
  })
})

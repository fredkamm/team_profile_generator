const Engineer = require('../lib/engineer');
const engineer = new Engineer('fred', '1', 'fred@gmail.com', 'fredkamm')

describe("Engineer", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(engineer.name).toEqual('fred')
        })
    })
    describe('id', () => {
        it(`should return the id number 1`, () => {
            expect(engineer.id).toEqual('1')
        })
    })
    describe('email', () => {
        it(`should return the email fred@gmail.com`, () => {
            expect(engineer.email).toEqual('fred@gmail.com')
        })
    })
    describe('github', () => {
        it(`should return the github fredkamm`, () => {
            expect(engineer.github).toEqual('fredkamm')
        })
    })
})
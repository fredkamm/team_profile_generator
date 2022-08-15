const Manager = require('../lib/manager');
const manager = new Manager('fred', '1', 'fred@gmail.com', '1')

describe("Manager", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(manager.name).toEqual('fred')
        })
    })
    describe('id', () => {
        it(`should return the id number 1`, () => {
            expect(manager.id).toEqual('1')
        })
    })
    describe('email', () => {
        it(`should return the email fred@gmail.com`, () => {
            expect(manager.email).toEqual('fred@gmail.com')
        })
    })
    describe('officeNumber', () => {
        it(`should return the office number as 1`, () => {
            expect(manager.officeNumber).toEqual('1')
        })
    })
})
const Employee = require('../lib/employees');
const employee = new Employee('fred', '1', 'fred@gmail.com')

describe("Employee", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(employee.name).toEqual('fred')
        })
    })
    describe('id', () => {
        it(`should return the id number 1`, () => {
            expect(employee.id).toEqual('1')
        })
    })
    describe('email', () => {
        it(`should return the email fred@gmail.com`, () => {
            expect(employee.email).toEqual('fred@gmail.com')
        })
    })
})
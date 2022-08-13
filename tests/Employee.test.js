const Employee = require('../lib/employees');
const employee = new Employee('fred', '1', 'fred@gmail.com')

describe("Employee", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(employee.name).toEqual('fred')
        })

    })
})
const Manager = require('../lib/manager');
const manager = new Manager('fred', '1', 'fred@gmail.com',)

describe("Manager", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(manager.name).toEqual('fred')
        })

    })
})
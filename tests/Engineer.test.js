const Engineer = require('../lib/engineer');
const engineer = new Engineer('fred', '1', 'fred@gmail.com', 'fred')

describe("Engineer", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(engineer.name).toEqual('fred')
        })

    })
})
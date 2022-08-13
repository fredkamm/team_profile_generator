const Intern = require('../lib/intern');
const intern = new Intern('fred', '1', 'fred@gmail.com', 'fred')

describe("Intern", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(intern.name).toEqual('fred')
        })

    })
})
const Intern = require('../lib/intern');
const intern = new Intern('fred', '1', 'fred@gmail.com', 'UPenn')

describe("Intern", () => {
    describe('name', () => {
        it(`should return the name fred`, () => {
            expect(intern.name).toEqual('fred')
        })
    })
    describe('id', () => {
        it(`should return the id number 1`, () => {
            expect(intern.id).toEqual('1')
        })
    })
    describe('email', () => {
        it(`should return the email fred@gmail.com`, () => {
            expect(intern.email).toEqual('fred@gmail.com')
        })
    })
    describe('school', () => {
        it(`should return the school UPenn`, () => {
            expect(intern.school).toEqual('UPenn')
        })
    })
})
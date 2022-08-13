const Employee = require('./employees');

class Intern extends Employee {
    constructor(name, id, email, school ) {
        this.school = school
  
      super(area, perimeter);
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
  }

module.exports = Intern;
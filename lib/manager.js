const Employee = require('./employees');

class Manager extends Employee {
    constructor(name, id, email, officeNumber ) {
        this.officeNumber = officeNumber
  
      super(area, perimeter);
    }
    getRole() {
        return 'Manager'
    }
  }

module.exports = Manager;
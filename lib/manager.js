const Employee = require('./employees');

// manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber ) {
      
      super(name, id, email, officeNumber);
      this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
  }

module.exports = Manager;
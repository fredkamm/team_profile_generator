const Employee = require('./employees');

class Engineer extends Employee {
    constructor(name, id, email, github ) {
      
      super(area, perimeter);
      this.github = github
      
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
  }

module.exports = Engineer;
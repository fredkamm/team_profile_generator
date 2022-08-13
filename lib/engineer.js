const Employee = require('./employees');

class Engineer extends Employee {
    constructor(name, id, email, github ) {
        this.github = github
  
      super(area, perimeter);
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
  }

module.exports = Engineer;
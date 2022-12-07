'use strict'

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        const str = this.github.toString();
    return str;
    }
    //overrides Employee getRole() method
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
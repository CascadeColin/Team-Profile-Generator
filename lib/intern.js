'use strict'

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        const str = this.school.toString();
        return str;
    }
    //overrides Employee getRole() method
    getRole() {
        return this.role;
    }
}

module.exports = Intern;
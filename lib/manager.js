'use strict'

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber.toString();
        this.role = "Manager";
    }
    //overrides Employee getRole() method
    getRole() {
        return this.role;
    }
}

module.exports = Manager;
'use strict'

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    //overrides Employee getRole() method
    getRole() {
        // const manager = super.getRole();
        // manager = 'Manager'
        return this.role;
    }
}

module.exports = Manager;
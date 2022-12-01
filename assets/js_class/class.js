'use strict'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {}
    getId() {}
    getEmail() {}
    getRole() {}
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    //overrides Employee getRole() method
    getRole() {}
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {}
    //overrides Employee getRole() method
    getRole() {}
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {}
    //overrides Employee getRole() method
    getRole() {}
}

module.exports = Employee;
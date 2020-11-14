class User {
    constructor() {
        this.firstName = prompt("Input your first name");
        this.lastName = prompt("Input your last name");
        this.yearOfBirth = prompt("Input your year of birth");
        this.solveAge();
        this.show();
    }

    solveAge() {
        return 2020 - this.yearOfBirth;
    }

    show() {
        alert("First name " + this.firstName + "\nLast name " +  this.lastName + "\nAge " + this.solveAge());
    }
}

let user = new User();

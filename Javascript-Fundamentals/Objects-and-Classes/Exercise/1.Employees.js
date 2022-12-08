function employees(names) {
    class Person {
        constructor(name) {
            this.fullName = name;
            this.personalNumber = name.length;
        }
        identify() {
            console.log(`Name: ${this.fullName} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for(const name of names) {
        const currentPerson = new Person(name);
        currentPerson.identify();
    }
}
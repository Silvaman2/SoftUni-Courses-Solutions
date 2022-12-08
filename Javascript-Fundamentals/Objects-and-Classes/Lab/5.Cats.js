function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(const string of input) {
        let [name, age] = string.split(' ');
        age = Number(age);

        const currentCat = new Cat(name, age);
        currentCat.meow();
    }
}
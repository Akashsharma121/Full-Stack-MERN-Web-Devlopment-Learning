class User {

    constructor(name) {
        // invokes the setter
        this.name = name
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is to short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("Jhon");
console.log(user.name); // Jhon

// user = new User("");
//  or
user.name = "Akash"// Name is to short.
console.log(user.name)
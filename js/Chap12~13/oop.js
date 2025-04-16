'use strict';
class Animal {
    static ID = 1;
    constructor(name) {
        this.name = name;
    }

    feed(nutrient){
        console.log(`feed to ${this.name} :`, nutrient);
    }
}

const petMixin = {
    likesPeople() {
        console.log(`${this.name} like…`);
    }
}

class Dog extends Animal {
    #age = 0;
    constructor(name, age) {
        super(name);
        // this.name = name;
        this.#age = age;
    }

    setName(newName) {
        this.name = newName;
    }

    getAge() {
        return this.#age;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        console.log('🚀 newAge---:', newAge, this.age);
        this.#age = newAge;
    }

    f() {
        return this.ID;
    }
    static sf() {
        return this.ID;
    }
}

const ani = new Animal();
const aid = ani.ID;
console.log('🚀 aid:', aid);

const dog = new Dog('Dog', 3);
console.log('🚀 dog:', dog.f(), Dog.sf());
console.log('🚀 name:', dog.name, dog.getAge());
dog.setName('Maxx');
// dog.name = 'Maxx';
dog.age = 9;
console.log('🚀 name:', dog.name, dog.age);
dog.feed('VC');
Object.assign(Dog.prototype, petMixin);
dog.likesPeople();

// ----------------------
function wrapFullname(user) {
    return new Proxy(user, {
        get(target, prop) {
        // log(target, prop, loginEmp)
        if (prop === 'fullname') {
            return `${target.firstName} ${target.lastName}`;
        } else {
            return target[prop];
        }
        },

        set(target, prop, value) {
        if (prop === 'fullname') {
            [target.firstName, target.lastName] = value.split(' ');
        } else {
            target[prop] = value;
        }
        return target;
        },
    });
}
const hongOrg = {
    id: 1,
    firstName: 'Kildong',
    lastName: 'Hong',
    // get fullname() {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  // set fullname(fname) {
  //   console.log('🚀 fname:', fname);
  //   [this.firstName, this.lastName] = fname.split(' ');
  // },
};

const hong = wrapFullname(hongOrg);

console.log('🚀 fullname11:', hong.id, hong.fullname);
hong.fullname = 'Jhon Hong';
console.log('🚀 fullname22:', hong.fullname);

const kim = wrapFullname({ id: 2, firstName: 'Kildong', lastName: 'Kim' });
console.log('🚀 kim:', kim.id, kim.fullname);
kim.id = 5;
kim.fullname = 'Jhon Kim';
console.log('🚀 kim:', kim.id, kim.fullname);

// ----------------------

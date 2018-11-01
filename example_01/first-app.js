const person = {
    name: 'Matic',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name + '!')
    }
};


const hobbies = ['Sport', 'Cooking', 43, true];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.length);
console.log(hobbies);
console.log(hobbies.map(hobby => { return 'Hobby: ' + hobby;}));
hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedSecondArray = [...hobbies];
console.log(copiedSecondArray);

const toArray = (...args) => {
    return args;
};


console.log(toArray(1, 2, 3, 4));

const printName = (personData) => {
    console.log(personData.name);
};

const printNameAgain = ({ name }) => {
    console.log(name);
};

printName(person);
printNameAgain(person);
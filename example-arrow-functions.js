var names = ['Lance', 'Fart', 'Crappo'];

/*names.forEach(function(name) {
    console.log('foreEach',name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));*/

// var farts = (name) => name + '!';
// console.log(farts('lance'));

// var person = {
//     name: 'Lance',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + 'says fuck off' + name);
//         });
//     }
// };

// person.greet();

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => a + b;

var addExperssion = (a, b) => {
    return a + b;
}

console.log(addStatement(2,4));
console.log(addExperssion(4,5));
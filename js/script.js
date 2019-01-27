let names = ['Ania','Ewelina','Karina','Elina'];

console.log(names);
names.push('Andromeda','Natasha');

let startIndex = names.indexOf('Ewelina'); console.warn('shold be ${1} and get', startIndex);
startIndex += 2;

let newNames =names.slice(startIndex,names.indexOf ('Natasha'));
console.warn('sholud be Elina and Andromeda', newNames);
newNames.unshift('Shepard');

console.log(names, newNames, newNames[1] === names[3]);



let number = [];

for(let i=1; i <=35; i++){

    number.push(i);
    console.log(number);

}

console.log()
for(let i=1; i<=number.length; i++){
if(i<15){
    console.log(i);
}
if(i>=15 && i<=26) {
    console.log('continue');
continue;
}
if (i> 25 && i % 2 === 0){
    console.warn(i);
}
if(i === 31){
    console.log('break');
    break;
}

console.log('Iteration', i);
}




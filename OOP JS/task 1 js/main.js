function displayContextAndArguments(argument1, argument2, argument3){
    console.log(this);
    console.log(arguments);
}

let person = {
    name: 'Radosław',
    suername: 'Mazur',
    age: '28',
};

displayContextAndArguments.call(person, 'argunemtx', 'argumenty')
displayContextAndArguments.apply(person, ['argunemtx', 'argumenty'])
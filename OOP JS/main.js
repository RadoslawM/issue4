console.log(this);

function person(){
console.log(`person name is ${this.name}`)
}


let obj = {
    name: 'Radek', 
}

let person2 = person.bind(obj);

person2();

console.log();

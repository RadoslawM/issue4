function madeCat(name, age, sound){
    return {
    name: name,
    age: age,
    sound: sound,
        makeSound: function(){
            console.log(this.sound)
        }

    }
    
}

const cat1 = madeCat('alik',2, "wiskas, please");

const cat2 = madeCat('stefcia', 3, "give me this wiskas");

const cat3 = madeCat('kiki',5, "where is my food?");

console.log(cat1, cat2, cat3);


const cat4 = Object.create(cat3);

cat4.makeSound();
console.log(cat4);
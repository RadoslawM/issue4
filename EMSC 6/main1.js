class Farmer {
    constructor(name){
        this.name = name;
        this.goats = [];
        this.furStored = 0;
        this.shaveGoat = this.shaveGoat.bind(this);
    }


    shaveGoat(event){

    }

}

class Goat {
    constructor(name) {
        this.name = name;
        this.fur = 0;
        this.amIdead = false;
        this.img = (() => {
            const goatImg = document.createElement('img');
            img.scr = 'goat.jpg';
            return img;
        })();
    }

    increaseFur() {
        if (this.fur > 30) {
            this.killGoat()
        }
        this.fur += 1;
    }
}
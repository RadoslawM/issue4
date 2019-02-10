//1. Utworzyć klasę ShopCart która będzie miała listę zakupów
//2. Utworzyć potrzebne addItemToCard oraz removeItemFromCard usuwania i dodawania przedmiotów do koszyka
//3. Utworzyć metodę koszyka checkProducts która będzie console.logowała typ produktu, nazwę oraz jego cenę i wywoływała dostępne metody tego produktu
//4. Utworzyć klasę Product która będzie miała pola: type, name, price,
//5. Utworzyć klasę Toy która będzie dziedziczyć po klasie Product, dodatkowo będzie miała pole sound oraz metodę makeSound
//6. Utworzyć klasę Phone która będzie dziedziczyć po klasie Product, dodatkowo będzie miała pole ringTone oraz metodę makeCallop

class ShopCart{
    constructor() {
        this.products = [];
    }

    addItemToCard(product){
        this.products.push(product);
    }

    removeItemFromCard(index){
        this.products.splice(index, 1);
    }

    checkProducts(){
        this.products.forEach((product) => {
            console.log(product.type, product.name, product.price);
            if (product.checkMyfunctionality){
                product.checkMyfunctionality();
            }
        });
    
    }
}

class Product{
    constructor(type, name, price){
        this.type = type,
        this.name = name,
        this.price = price
    }
}

class Toy extends Product{
    constructor(type, name, price, sound){
        super(type, name, price, sound);
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

class Phone extends Product{
    constructor(type, name, price, ringTone){
        super (type, name, price, ringTone)
        this.ringTone = ringTone;
    }
    makeCall(){
        console.log(this.ringTone);
    }
}

const newShopCart = new ShopCart ;

const phone1 = new Phone('smartphone', 'Honor 8', 500, 'bip');
const phone2 = new Phone('smartphone','HTC 10', 300, 'tik-tik' );
const toy1 = new Toy('blocks', 'Lego', 50, 'clock');
const toy2 = new Toy('Plush', 'pedobear', 20, 'hello I am pedobear');

newShopCart.addItemToCard(phone1);
newShopCart.addItemToCard(phone2);
newShopCart.addItemToCard(toy1);
newShopCart.addItemToCard(toy2);

newShopCart.checkProducts();

    
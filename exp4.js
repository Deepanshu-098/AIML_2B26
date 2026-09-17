class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    getDiscountedPrice(discount){
        return this.price-(this.price*discount/100);
    }
    display(){
        console.log("Product ID :",this.productId);
        console.log("Product Name :", this.productName);
        console.log("Price :", this.price);
    }
    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log("Costlier Product:", p1.productName);
        } else if (p2.price > p1.price) {
            console.log("Costlier Product:", p2.productName);
        } else {
            console.log("Both products have the same price.");
        }

class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
         display() {
            console.log("Product Name :",this.productName);
            console.log("Product ID :", this.productId);
            console.log("Price :", this.price);
            console.log("Warranty :", this.warranty);
        }
    }
    
}
}

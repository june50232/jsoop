var Coffee = function () {
    this.color = "brown";
};

var Milk = function () {
    this.color = "white";
};

var OrangeJuice = function () {
    this.color = "orange";
};

var c = new Coffee();
var m = new Milk();



// 工廠
var DrinkShop = function () {
    this.sellDrink = function(type) {
        var drink;
        if (typeof window[type] !== "function") {
            type = "OrangeJuice";
        }
        drink = new Window[type]();
        drink.showColor = function() [
            console.log("Drink color:" + drink.color);  // 每個類別都有color屬性
            }
        return drink;    
    }
};

var drinkshop = new Drinkshop();
drinkShop.sellDrink("Milk").showColor();  // 在這裡拿到實體，去看他的顏色

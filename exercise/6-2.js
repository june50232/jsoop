// 單體模式 singleton 

function Cat() {
    if (typeof Cat.instance === "object"){   // instance只是一個屬性
        return Cat.instance;
    }
    
    this.name = "Mimi";
    Cat.instance = this;
    return this;
}

var cat1 = new Cat();
var cat2 = new Cat();

console.log(cat1 === cat2); 
// false  不儲存在相同的記憶體空間


// 以下儲存在同一個記憶體空間


function Cat() {
    if (typeof Cat.instance === "object"){   // instance只是一個屬性
        return Cat.instance;
    }
    
    this.name = "Mimi";
    Cat.instance = this;
    return this;
}

Cat.prototype.move = function() {
    return this.name + " move";
};

var cat1 = new Cat();
var cat2 = new Cat();

console.log(cat1 === cat2); 
// true  只有一個實體，存在相同的記憶體空間

cat1.name = "Coco";
console.log(cat2.name);
function Obj(n) {
    this.name = "Mark";
    this.number = n
}

var obj = Obj(55); // 忘記new => this 指到 window








// 為避免忘記new，以下

function Obj(n) {
    if (this instanceof Obj){
        this.name = "Mark";
        this.number = n    
    } else {                  // 如果this 不是obj的類別，this 指向window
        return new Obj(n);
    }    
}

var obj = Obj(55); 
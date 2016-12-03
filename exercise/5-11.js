//Object原型繼承方法

Object.prototype.inherits = function(superCtor) {
    var F = function() {};
    F.prototype = superCtor.prototype;
    this.prototype = new F();
    this.uber = superCtor.prototype;
    this.prototype.constructor = this;
};


// 1. 建立point類別，透過set方法設定x和y座標，透過get取得座標物件。

function Point() {
    this.x = 0;
    this.y = 0;
}

Point.prototype.write = function(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.read = function() { // 透過read拿到x, y物件
    return {
        x: this.x, 
        y: this.y
    }
}

var P = new Point();
p.write(5, 7);
console.log(p.read);


// 2. 建立RangePoint類別，繼承Point類別，複寫set方法並限制範圍。

function RangePoint(min, max) {
    Point.apply(this, arguments);
    this.min = min;
    this.max = max;
}
RangePoint.inherits(Point);
RangePoint.prototype.write = function(x, y) {
    x = x < this.min ? this.min : x;
    x = x > this.max ? this.max : x;
    y = y < this.min ? this.min : y;
    y = y > this.max ? this.max : y;
    
    this.constructor.uber.write.apply(this, arguments); // 透過apply把this換掉了。未來父類別要改，子類別可以不用改。
}

var rp = new RangePoint(-50, 50);
rp.read(-100, 100);
console.log(rp.read);


// 3. 建立intergerRangePoint類別，繼承RangePoint類別，複寫set方法並四捨五入。

function IntergerRangePoint() {
    RangePoint.apply(this, arguments);    
}
IntergerRangePoint.inherits(RangePoint);

var irp = new IntergerRangePoint(0, 10);
irp.write(9.1, 7.8);
console.log(irp.read());

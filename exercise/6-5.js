function Computer() {
  this.cost = function () {
      return 41900;
  };  
  this.screenSize = function() {
      return 12;
  }
};


// 目標： 提高售價： 增加記憶體、刻字、增加保固的時間

function addMemory(pc) {
    var v = pc.cost();
    pc.cost = function() { // 覆寫
        return v + 10000;
    }
}

function addEngraving(pc) {
    var v = pc.cost();
    pc.cost = function(){
        return v + 1000;
    }
}

function addInsurance(pc) {
    var v = pc.cost();
    pc.cost = function () {
        return v + 8590;
    }
}


var mb = new Computer(); // 產生一個實體

// 看客戶有哪些需求
addMemory(mb);
addEngraving(mb);
addInsurance(mb);

console.log(mb.cost()); // 印出價格
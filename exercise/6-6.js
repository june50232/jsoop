var data = {
    name: "Mary",
    message: "I am lucky"
}; // 資料封包

var Sender = function(strategy) { // 建立建構式，建立策略的部分，sender並不知道你要用哪種策略，是執行當下才會知道
    this.strategy = strategy;   // 把它存在實體
}

Sender.prototype.send = function (data) {
    this.strategy.send(data); // 一定要具備send這個介面，他可以把資料傳出去
}

var xmlStrategy = {  // xml 策略
    send: function(data) {
        var str = "<xml><name>" + data.name + "</name><message>" + data.message + "</message></xml>";
        console.log("data:" + str);
    }
}

var jsonStrategy = {
    send: function(data) {
        console.log("data:" + JSON.stringify(data));
    }
}

var task = new Sender(xmlStrategy); // 呼叫sender的時候，可以選擇用哪種策略
task.send(data);  // 把資料傳進去
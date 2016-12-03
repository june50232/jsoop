var car = {
    startEngine: function() {
        console.log("startEngine");
    },
    stopEngine: function() {
        console.log("stopEngine");
    },
    run: function() {
        consle.log("run");
    }
};

function ProxyCar(car) {    
    var isStarted = false;  // 比 this.isStarted = false;好，避免覆寫
    this.startEngine = function() {
        if (isStarted) {
            console.log("It is already started!")
        }  else {
            car.startEngine();
            isStarted = true;
        }
    };
    this.stopEngine = function() {
        if(!isStarted) {
            console.log("it is already stop");
        } else {
            car.stopEngine();
            isStarted = false;
        }
    }
    this.run = function() {
        if(!isStarted) {
            console.log("you have to start first");
        } else {
            car.run();
        }
    }
} 

var ProxyCar = new ProxyCar(car);
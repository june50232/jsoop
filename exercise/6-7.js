var cpu = {
    execute: function() {
        console.log("execute");
    }
};

var memory = {
    load: function() {
        console.log("load");
    }
}

var hdd = {
    write: function() {
        console.log("write"); 
    }
}

var computer = {       // 把這些動作包裝起來  成一個外觀
    work: function() {
        memory.load();
        cpu.execute();
        hdd.write();        
    }
}

function User() {
    this.main = function () {
        computer.work();
        computer.work();
        computer.work();
    }
}

new User().main()


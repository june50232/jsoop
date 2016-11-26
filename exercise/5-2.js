function base() {
    console.log(this, arguments);
};

base.call(1,2,3);
base.apply(1,[2,3]);
base.bind(1); //第一個參數修改this,回傳一個新的function
base.bind(1)(2, 3); 
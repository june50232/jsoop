var egg = (function () { // 產生一個迭代器
    var index = 0,
        data = [1, 2, 3, 4, 5], // 實際資料被保護在這裡
        length = data.length;
    
    return {            // return ，你才能去取用index、data
        next: function() {
            var element;
            if(!this.hasNext()) {
                return null;
            } 
            element = data[index];
            index = index + 1;
            return element;
        },
        hasNext: function() {
            return index < length;
        },
        rewind: function() {  // 歸0
            index = 0;
        },
        current: function() {
            return data[index];
        }
    };
    
})();

egg.next();  // return的東西都可以取用，但就是不能直接拿data



// 例如我們用while迴圈來取

// 第一次操作會讓迭代器回到0 
egg.rewind();
while (egg.hasNext()) {
    console.log(egg.current());
    egg.next();
}

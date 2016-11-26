var cat = {};
cat.name = "kitty";
cat.getName = function() {
    return this.name;
};
//也可以這樣寫

var cat = {
    name: "kitty",
    getName: function() {
        return this.name;
    }
}

var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Running");
    };
    return Person;
}());
var p = new Person();
console.log(typeof p);
console.log(typeof Person);
p.run();
//# sourceMappingURL=lession17.js.map
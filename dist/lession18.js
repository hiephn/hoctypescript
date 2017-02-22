var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log('Xin chao ' + this.name);
    }
    Person.talk = function () {
        console.log('Talk');
    };
    Person.prototype.run = function () {
        console.log('Run');
    };
    return Person;
}());
var p1 = new Person('hiep');
Person.talk();
//# sourceMappingURL=lession18.js.map
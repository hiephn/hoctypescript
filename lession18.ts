class Person{
    constructor (name){
        this.name = name;
        console.log('Xin chao ' + this.name);
    }

    static talk(){
        console.log('Talk');
    }

    run(){
        console.log('Run');
    }
}

var p1 = new Person('hiep');
Person.talk();
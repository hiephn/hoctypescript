var employee = {
    id: 5,
    sayName: function () {
        setTimeout(() => console.log(this.id),2000);
        
    }
}
employee.sayName();
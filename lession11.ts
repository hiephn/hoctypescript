let displayColor = function (...colors:string[]) {
    for(let color in colors){
        console.log(colors);
    }
}

displayColor('Red','Green','Blue');


displayColor('Red','Green');

displayColor('Red');

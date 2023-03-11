let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

console.log(myDog.name);
console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        // completa this.text
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        myApp.innerHTML = `<button>${this.text}</button>`; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
// let myButon = new ....
// myButon.metodoQueSea()

let myButton = new Button("app", "Este es el boton creado");

myButton.render();

//Nuevo objeto Input

class Input {
    constructor(parentID, placeholder){
        this.parentID = parentID;
        this.placeholder = placeholder;
    }

    render(){
        let div = document.getElementById(this.parentID);
        div.innerHTML = `<input type="text" placeholder="${this.placeholder}">`;
    }
}

let myInput = new Input("app2", "Este es el input creado");

myInput.render();
/*  CREACIÓN E IDENTIFICACIÓN DE LOS EVENTOS */

var numberOfButtons = document.querySelectorAll(".drum").length; //selecciona y encapsula la cantidad de botones

for(var i = 0; i<numberOfButtons; i++){ //con un loop le agregamos eventos de tipo click a todos los botones
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHtml = this.innerHTML; //identificamos y guardamos en una variable el boton en que se hizo click (el trigger)
        
        makeSound(buttonInnerHtml); //le pasamos ese boton donde se hizo click a la funcion para hacer sonido (como parámetro)

        animateButton(buttonInnerHtml); // después le pasamos ese boton donde se hizo click a la funcion para animar (como parámetro)
        
    });      
};

document.addEventListener("keydown", function(event){ //pone a toda la página web a la escucha por si se presiona una tecla del teclado

    makeSound(event.key); //event.key identifica qué tecla se presionó específicamente y se pasa como parámetro a la función

    animateButton(event.key); //también se pasa a la función de animación
});


/*  QUÉ HACER CON EL EVENTO? */

function makeSound(key){ //puede recibir tanto un click como una tecla presionada y hace el sonido de instrumento

    switch (key) { //evalúa si la tecla presionada o clickeada coincide con alguno de los casos
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default: console.log(key);
            break;
    }
}

function animateButton(pressedElement){ //puede recibir tanto un click como una tecla presionada y simula la animación de presionar un botón

    var activeButton = document.querySelector("." + pressedElement); /*tanto el buttonInnerHtml como el event.key que pasamos como parámetros 
                                                                        identificaron qué letra se clickeo o tecleó. Para animar, necesitamos 
                                                                        seleccionar la clase correspondiente a esa letra (que trae en el html) 
                                                                        para después sumarle otra clase (con el estilo simulando un boton presionado).
                                                                        Para eso, concatenamos un punto y la letra identificada, y así formamos
                                                                        la clase. Esto lo guardamos en una variable para poder usarla */

    activeButton.classList.add('pressed'); //tomamos el elemento clickeado/tecleado y le agregamos la clase que simula el boton presionado

    setTimeout(function(){ //después de menos de medio segundo, removemos la clase del boton presionado y vuelve a su estado normal. Lo cual da
                                                    // la ilusión que tocamos el boton y cuando dejamos de presionarlo la tecla se levanta sola
        activeButton.classList.remove('pressed');
    }, 100);
}
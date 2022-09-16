let boton = document.getElementById("1");
boton.addEventListener("click", saludo);

function saludo(){
    alert("hola que tenga un muy buen dia")
};

let colores = document.getElementById("0");
let boton1 = document.getElementById("2");

boton1 = addEventListener("mouseout", () => {
    colores.className="rojo"
});
boton1 = addEventListener("mouseover", () => {
    colores.className="verde"
});

let footer = document.getElementById("4")
let boton3 = document.getElementById("foot")

footer.addEventListener("keyup", (a) =>{
    if(a.key === "a"){
        boton3.className= "rojo"
    }
    else if(a.key === "b"){
        boton3.className = "verde"
    }
})

//fin desafio de eventos


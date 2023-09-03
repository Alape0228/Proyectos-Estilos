let estrella00 = document.querySelectorAll(".estrella00");
let estrella01 = document.querySelectorAll(".estrella01");
let estrella02 = document.querySelectorAll(".estrella02");

estrella00.forEach((conjuntoEstrellas,index)=>{
    // console.log(estrella00);
    // console.log(index);
    conjuntoEstrellas.addEventListener("click",()=>{
        for (let i = 0; i <= index; i++) {
            // console.log(i); 
            // console.log(estrella00[i]); 
            estrella00[i].classList.add("checked");
        }
        for (let i = index+1; i < estrella00.length; i++) {
            console.log(estrella00[i]);
            // console.log(i);
            // console.log(index);
            estrella00[i].classList.remove("checked");
        }
    })
})

estrella01.forEach((conjuntoEstrellas,index)=>{
    conjuntoEstrellas.addEventListener("click",()=>{
        for (let i = 0; i <= index; i++) {
            estrella01[i].classList.add("checked");
        }
        for (let i = index+1; i < estrella01.length; i++) {
            console.log(estrella01[i]);
            estrella01[i].classList.remove("checked");
        }
    })
})

estrella02.forEach((conjuntoEstrellas,index)=>{
    conjuntoEstrellas.addEventListener("click",()=>{
        for (let i = 0; i <= index; i++) {
            estrella02[i].classList.add("checked");
        }
        for (let i = index; i < estrella02.length; i++) {
            console.log(estrella02[i]);
            estrella02[i].classList.remove("checked");
        }
    })
})


// LINEA 6
// El forEach Recorre todos los elementos que tengan la clase estrella
// El parametro conjuntoEstrellas almacenara todos los elementos con sus hijos
// El parametro index, sirve como posicionador o indicador que recorre todos los elementos
// El ciclo recorrera 5 veces debido a las 5 estrellas que son los 5 elementos con la clase estrella   


// LINEA 9
// El evento click se realiza con referencia al conjunto de las estrellas obtenidos del parametro del forEach

// LINEA 10
// Se realiza un ciclo con referencia al index; y el index es el posicionamiento que en este caso es 5
// console.log(estrella[i]) nos traera el elemento en su posicion, como es un ciclo mostrara a cada uno de los elementos estrellas
// console.log(i); de las 5 estrellas nos muestra la posicion en la cual se haya dado click


// LINEA 14 


// LINEA 15
// Mostrara todos los elementos estrellas del conjunto unos con su clase checked y otros no

// LINEA 16
// Solo se debe eliminar la clase checked para los que ya lo tengan




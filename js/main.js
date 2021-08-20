const labelUno = document.getElementById('menu-hambur');
const leftPag = document.getElementById('left') ;
const rightPag=document.getElementById('right');
const main = document.getElementById('container-main');


function mostrar(){
    if(labelUno.checked == true){
        rightPag.style.display=("block");
        rightPag.style.position=("relative");
        rightPag.style.right=("50%");
        rightPag.style.top=("50px");
        rightPag.style.height=("91vh");
        rightPag.style.maxWidth=("400px");
    console.log("Es verdadero");
    }else{
        console.log("Esfalso");
        rightPag.style.right=("-50%");
        leftPag.style.width=("100%");
        window. location. reload();

    }
}

labelUno.addEventListener('click',mostrar);

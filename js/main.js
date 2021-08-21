const labelUno = document.getElementById('menu-hambur');
const leftPag = document.getElementById('left') ;
const rightPag=document.getElementById('right');
const main = document.getElementById('container-main');


function mostrar(){
    if(labelUno.checked == true){
        rightPag.style.right=("0");
        rightPag.style.maxWidth=("400px");
    console.log("Es verdadero");
    }else{
        rightPag.style.right=("-100%");
       // leftPag.style.width=("100%");
        //window. location. reload();

    }
}

labelUno.addEventListener('click',mostrar);

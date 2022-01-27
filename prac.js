const first= document.getElementById('clickpoint');

function action(){
    return first.style.color="blue"
}

first.addEventListener("click",action());

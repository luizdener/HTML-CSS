function clickMenu() {
    if(itens_menu.style.display == 'block'){
        itens_menu.style.display = 'none'
    } else {
        itens_menu.style.display = 'block'
    }
}

function mudouTamanho() {
    if(window.innerWidth >= 768){
        itens_menu.style.display = 'block'
    } else{
        itens_menu.style.display = 'none'
    }
}
const polos = document.getElementsByClassName("product");

const blue = document.getElementById("js--blue");

blue.onclick = function(){
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "none";
    }
    document.getElementById("js--blue-modal").style.display = "grid";
}

const closeBlue = document.getElementById("js--close-blue");

closeBlue.onclick = function(){
    document.getElementById("js--blue-modal").style.display = "none";
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "block";
    }
}



const red = document.getElementById("js--red");

red.onclick = function(){
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "none";
    }
    document.getElementById("js--red-modal").style.display = "grid";
}

const closeRed = document.getElementById("js--close-red");

closeRed.onclick = function(){
    document.getElementById("js--red-modal").style.display = "none";
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "block";
    }
}

const white = document.getElementById("js--white");

white.onclick = function(){
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "none";
    }
    document.getElementById("js--white-modal").style.display = "grid";
}

const closeWhite = document.getElementById("js--close-white");

closeWhite.onclick = function(){
    document.getElementById("js--white-modal").style.display = "none";
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "block";
    }
}

const black = document.getElementById("js--black");

black.onclick = function(){
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "none";
    }
    document.getElementById("js--black-modal").style.display = "grid";
}

const closeBlack = document.getElementById("js--close-black");

closeBlack.onclick = function(){
    document.getElementById("js--black-modal").style.display = "none";
    for(let i = 0; i < polos.length; i++){
        polos[i].style.display = "block";
    }
}
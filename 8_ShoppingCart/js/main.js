const adds = document.getElementsByClassName("polos__button");
let cart = 0;
const cartvalue = document.getElementsByClassName("shoppingCart__message")[0];
const modal = document.getElementById("js--shoppingModal");
let modalOpen = false;

let beige = 0;
let navy = 0;
let pink = 0;
let price_beige = 0;
let price_navy = 0;
let price_pink = 0;

for (let i = 0; i < adds.length; i++){
    adds[i].onclick = function () {
        cart += 1;
        cartvalue.innerHTML = cart;
        switch (adds[i].dataset.product) {
            case "beige":
                beige += 1;
                price_beige = 90 * beige;
                break;
            case "navy":
                navy += 1;
                price_navy = 90 * navy;
                break;
            case "pink":
                pink += 1;
                price_pink = 90 * pink;
                break;
        }
        if (modalOpen === false) {
            modal.style.display = "flex";
            modalOpen = true
            setTimeout(function(){
                modal.style.display = "none";
                modalOpen = false;
            }, 2000);
        }
    }
}

const checkout = document.getElementById("checkoutButton");
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block"
        icon_arrow.style.display = "block"
        icon_cart.style.display = "none"
        checkoutOpen = true;
        document.getElementById("js--beige").innerHTML = beige + "x  €" + price_beige;
        document.getElementById("js--navy").innerHTML = navy + "x  €" + price_navy;
        document.getElementById("js--pink").innerHTML = pink + "x  €" + price_pink;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    icon_arrow.style.display = "none"
    icon_cart.style.display = "block"
    checkoutOpen = false;
}
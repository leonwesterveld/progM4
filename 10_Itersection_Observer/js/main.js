const adds = document.getElementsByClassName("polos__button");
let cart = 0;
const cartvalue = document.getElementsByClassName("shoppingCart__message")[0];
const modal = document.getElementById("js--shoppingModal");
let modalOpen = false;

let beige = 0;
let navy = 0;
let pink = 0;
let red = 0;
let white = 0;
let price_beige = 0;
let price_navy = 0;
let price_pink = 0;
let price_red = 0;
let price_white = 0;

for (let i = 0; i < adds.length; i++) {
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
            case "red":
                red += 1;
                price_red = 90 * red;
                break;
            case "white":
                white += 1;
                price_white = 90 * white;
                break;
        }
        if (modalOpen === false) {
            modal.style.display = "flex";
            modalOpen = true;
            setTimeout(function () {
                modal.style.display = "none";
                modalOpen = false;
            }, 2000);
        }
    };
}

const checkout = document.getElementById("checkoutButton");
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;
const search = document.getElementById("js--search");

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        icon_arrow.style.display = "block";
        icon_cart.style.display = "none";
        checkoutOpen = true;
        document.getElementById("js--beige").innerHTML =
            beige + "x  €" + price_beige;
        document.getElementById("js--navy").innerHTML =
            navy + "x  €" + price_navy;
        document.getElementById("js--pink").innerHTML =
            pink + "x  €" + price_pink;
        document.getElementById("js--red").innerHTML =
            red + "x  €" + price_red;
        document.getElementById("js--white").innerHTML =
            white + "x  €" + price_white;
        search.style.display = "none";
        document.getElementsByClassName("searchBar__glass")[0].style.display =
            "none";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    icon_arrow.style.display = "none";
    icon_cart.style.display = "block";
    search.style.display = "block";
    document.getElementsByClassName("searchBar__glass")[0].style.display =
        "flex";
    checkoutOpen = false;
};

/* bar*/
const polos = document.getElementsByClassName("polos__polo");
search.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let searchTerm = search.value.toLowerCase().split(" ").join("");
        for (let i = 0; i < polos.length; i++) {
            if (polos[i].dataset.title.search(searchTerm) === -1) {
                polos[i].style.opacity = 0.3;
            } else {
                polos[i].style.opacity = 1;
            }
        }
    }
};


/* observer */
let observer = new IntersectionObserver(//variabele aanmaken/ observer oproepen
    function (entries){//begin function
        if(entries[0].isIntersecting === true){//als main in beeld is
            document.getElementsByTagName("main")[0].classList.add("a-popup");//zet popup animatie erop
            observer.disconnect();//zet observer uit als is gebeurt
        }
    }, {
        threshold: 0.1,//hoeveel % in beeld moet zijn 0.1 = 10% 
    }
);

observer.observe(document.getElementsByTagName("main")[0]);//laat de observer kijken naar main
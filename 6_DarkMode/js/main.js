const root = document.querySelector(":root")
const mode = document.getElementById("mode")


mode.checked = false;

mode.onchange = function(){
    if(mode.checked === true){
        root.style.setProperty("--background-color", "white");
        root.style.setProperty("--font-color", "black");
        root.style.setProperty("--products-border-color", "black");
        return;
    }
    root.style.setProperty("--background-color", "#212730");
    root.style.setProperty("--font-color", "#d4d4d4");
    root.style.setProperty("--products-border-color","rgba(212, 212, 212, 0.4)");
    return;
}
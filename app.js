const appName = document.getElementById("app-name");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");

const apps = ["app", "blog", "shop", "note", "game", "grave"];
let i = 0;
let dark = false;

buttonRight.addEventListener("click", e => {
    i++
    if (i >= apps.length) {
        i = 0;
    }
    appName.innerHTML = apps[i];
});

buttonLeft.addEventListener("click", e => {
    i--
    if (i < 0) {
        i = apps.length - 1;
    } 
    appName.innerHTML = apps[i];
});

// https://www.tinyapp.live/
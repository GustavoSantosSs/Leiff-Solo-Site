window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 1);
})

function sobeT() {
    window.scrollTo ({
    top: 0,
    left: 0,
    behavior: "smooth"
    })
};

function dark() {
    var body = document.querySelector("body");
    body.classList.toggle('night');
    var header = document.querySelector('header');
    header.classList.toggle('night')
    var icons = document.querySelector("#top");
    icons.classList.toggle('night')
    var shadowlat = document.querySelector("#shadow");
    shadowlat.classList.toggle('dark')
    var shadowplat = document.querySelector("#platSHDW");
    shadowplat.classList.toggle('dark')
    var playstIC = document.querySelector("#psIMG");
    playstIC.classList.toggle('dark')
    var steamIC = document.querySelector("#stIMG");
    steamIC.classList.toggle('dark')
    var xboxIC = document.querySelector("#xbIMG");
    xboxIC.classList.toggle('dark')
    var latTXT = document.querySelector("#single");
    latTXT.classList.toggle('dark')
    var latTXT = document.querySelector("#single2");
    latTXT.classList.toggle('dark')
    var portTXT = document.querySelector("#portalsTXT");
    portTXT.classList.toggle('dark')
    var aboutTXT = document.querySelector("#about-txt");
    aboutTXT.classList.toggle('dark')
    var aboutGRID = document.querySelector("#about-main");
    aboutGRID.classList.toggle('dark')
    var overMENU = document.querySelector(".overlay");
    overMENU.classList.toggle('dark')
    var ic = document.getElementById("icon-img2")
    ic.classList.toggle('show')
    var icy = document.getElementById("icon-img")
    icy.classList.toggle('hid')
}

window.addEventListener("scroll", function() {
    var topButton = document.querySelector("#topButton");
    topButton.classList.toggle("show", window.scrollY > 800);
})

/*
function show(tipo) {
    if (tipo == 'menu') {
        var menu = document.querySelector(".sub-menu");
        menu.classList.toggle('show')
    } if (tipo == 'search') {
        var search = document.querySelector(".search-txt");
        search.classList.toggle('show')
        var divSearch = document.querySelector("#search-ba");
        divSearch.classList.toggle('show')
        var divSearch = document.querySelector(".search-btn");
        divSearch.classList.toggle('show')
    }
}*/

function openNav (foto) {
    var overlay = document.getElementById("myNav")
    overlay.classList.toggle('show')
    var overlayCont = document.querySelector("#overlay-content")
    overlayCont.classList.toggle('show')
    var ic = document.getElementById("icon-menu2")
    ic.classList.toggle('sh')
    var icy = document.getElementById("icon-menu")
    icy.classList.toggle('some')
}

function showICONS (tipo) {
    if (tipo == 'playstation') {
        var platIconA = document.querySelector("#ps-INFO")
        platIconA.classList.toggle('show')
    } else if (tipo == 'steam') {
        var platIconB = document.querySelector("#st-INFO")
        platIconB.classList.toggle('show')
    } else if (tipo == 'xbox') {
        var platIconC = document.querySelector("#xb-INFO")
        platIconC.classList.toggle('show')
    }
}
/*function closeNav() {
    document.getElementById("myNav").style.width = '0%';
}*/
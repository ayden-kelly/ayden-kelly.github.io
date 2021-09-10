function toggelTab1() {
    let dots = document.getElementById("tab1_dots");
    let image = document.getElementById("tab1_image");
    let btnText = document.getElementById("toggleTab1Image");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show image";
        image.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide image";
        image.style.display = "inline";
    }
}

function toggelTab2() {
    let dots = document.getElementById("tab2_dots");
    let image = document.getElementById("tab2_image");
    let btnText = document.getElementById("toggleTab2Image");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show image";
        image.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide image";
        image.style.display = "inline";
    }
}

function toggelTab3() {
    let dots = document.getElementById("tab3_dots");
    let image = document.getElementById("tab3_image");
    let btnText = document.getElementById("toggleTab3Image");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show image";
        image.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide image";
        image.style.display = "inline";
    }
}

function toggelTab4() {
    let dots = document.getElementById("tab4_dots");
    let image = document.getElementById("tab4_image");
    let btnText = document.getElementById("toggleTab4Image");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show image";
        image.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide image";
        image.style.display = "inline";
    }
}

function toggelTab5() {
    let dots = document.getElementById("tab5_dots");
    let image = document.getElementById("tab5_image");
    let btnText = document.getElementById("toggleTab5Image");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show image";
        image.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide image";
        image.style.display = "inline";
    }
}




function openTab(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}



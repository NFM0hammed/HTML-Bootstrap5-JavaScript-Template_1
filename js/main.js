let search      = document.querySelector("form .search"),
    overlay     = document.querySelector(".overlay"),
    searchBox   = document.querySelector(".search-box"),
    exit        = document.querySelector(".search-box span");

// Click on Search Button
search.addEventListener("click", (e) => {
    e.stopPropagation();
    overlay.style.display = "block";
    searchBox.style.display = "block";
    document.querySelector(".search-box input").focus();
});

// Exit Search Box After Click
exit.addEventListener("click", () => {
    overlay.style.display = "none";
    searchBox.style.display = "none";
});

// Exit Search Box After Click Anywhere
document.addEventListener("click", (e) => {
    if(searchBox.style.display == "block" && e.target != search) {
        overlay.style.display = "none";
        searchBox.style.display = "none";
    }
});

// Stop Propagation After Click on Search Box
searchBox.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Change Image
let img         = document.querySelector(".banner img"),
    title       = document.querySelector(".banner .info h3"),
    paragraph   = document.querySelector(".banner .info p");

// All Images
let imgs = [
    "imgs/chigaco.jpg",
    "imgs/la.jpg",
    "imgs/ny.jpg"
];

// Index
let i = 0;

// Function To Change Image
function changeImg() {
    // Source of Image
    img.src = imgs[i];

    // Change Info
    if(i === 1) {
        title.textContent = "Los Angeles";
        paragraph.textContent = "We had the best time playing at Venice Beach!";
    }
    else if(i === 2) {
        title.textContent = "New York";
        paragraph.textContent = "The atmosphere in New York is lorem ipsum.";
    }
    else {
        title.textContent = "Chicago";
        paragraph.textContent = "Thank you, Chicago - A night we won't forget";
    }

    // Increase i By 1
    i++;

    // If i Equal 3 Reset i
    if(i === 3) {
        i = 0;
    }

    // Call Function Every 3 Seconds
    setTimeout(changeImg, 3000);
}

// Call Function Change Image
changeImg();

// Toggle Menu
let btn     = document.querySelector(".navbar button"),
    menu    = document.querySelector(".navbar-collapse ul");

// Toggle Menu After Click
btn.onclick = function() {
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}
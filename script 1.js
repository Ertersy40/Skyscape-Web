function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}

// create new image objects
var medResImage = new Image();
var highResImage = new Image();

// when medium res image has loaded, replace the low res image
medResImage.onload = function() {
    document.getElementById('mainBackgroundImg').src = medResImage.src;
    // start loading high res image
    highResImage.src = "./Assets/Images/display-photo-full.JPG";
}

// when high res image has loaded, replace the medium res image
highResImage.onload = function() {
    document.getElementById('mainBackgroundImg').src = highResImage.src;
}

// start loading medium res image
medResImage.src = "./Assets/Images/display-photo-med.jpg";
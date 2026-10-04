

const introPage = document.getElementById("introPage");
const celebrationPage = document.getElementById("celebrationPage");
const galleryPage = document.getElementById("galleryPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const errorOverlay = document.getElementById("errorOverlay");
const closeError = document.getElementById("closeError");

const errorCount = document.getElementById("errorCount");
const errorMessage = document.getElementById("errorMessage");

const continueBtn = document.getElementById("continueBtn");

const carousel = document.getElementById("carousel");

const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");


/* =========================================
   NO BUTTON
========================================= */

let noClicks = 0;

const funnyMessages = [

    "You can't even see your little brother's gift? Shame on you! 😭",

    "EXCUSE ME?! You clicked NO AGAIN?! 😭",

    "Wow... rejecting your little brother's gift twice. I'm disappointed. 💀",

    "SYSTEM WARNING: Sister is refusing happiness! 🚨",

    "ERROR 404: Sister's YES button not found. 😂",

    "This is getting personal now... JUST PRESS YES! 😭",

    "Your little brother is emotionally damaged. 💔",

    "Okay... the website is judging you now. 👀",

    "SERIOUSLY?! HOW MANY TIMES?! 😂",

    "FINAL WARNING... maybe. 😈"
];


noBtn.addEventListener("click", () => {

    noClicks++;

    /*
        Counter:
        1
        2
        4
        8
        16
        32...
    */

    let displayNumber;

    if (noClicks === 1) {
        displayNumber = 1;
    } else {
        displayNumber = Math.pow(2, noClicks - 1);
    }

    errorCount.textContent = displayNumber;


    /*
        Message selection
    */

    const messageIndex =
        Math.min(
            noClicks - 1,
            funnyMessages.length - 1
        );

    errorMessage.textContent =
        funnyMessages[messageIndex];


    /*
        Show popup
    */

    errorOverlay.classList.add("show");


    /*
        Popup dramatic effect
    */

    const popup =
        document.querySelector(".error-popup");

    popup.style.animation = "none";

    void popup.offsetWidth;

    popup.style.animation =
        "errorShake 0.5s ease";


    /*
        Extra screen shake
    */

    document.body.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(-3px)" },
            { transform: "translateX(0)" }
        ],
        {
            duration: 350
        }
    );

});


/* =========================================
   CLOSE ERROR
========================================= */

closeError.addEventListener("click", () => {

    errorOverlay.classList.remove("show");

});


/*
    Close popup if background clicked
*/

errorOverlay.addEventListener("click", (event) => {

    if (event.target === errorOverlay) {

        errorOverlay.classList.remove("show");

    }

});


/* =========================================
   YES BUTTON
========================================= */

yesBtn.addEventListener("click", () => {

    introPage.classList.remove("active");

    setTimeout(() => {

        celebrationPage.classList.add("active");

        startCelebration();

    }, 350);

});


/* =========================================
   CELEBRATION
========================================= */

function startCelebration() {

    createBalloons();

    createConfetti();

    createFloatingHearts();

}


/* =========================================
   BALLOONS
========================================= */

function createBalloons() {

    const container =
        document.getElementById("balloonContainer");

    const balloons = [
        "🎈",
        "🎈",
        "🎈",
        "💗",
        "🎈",
        "💖",
        "🎈",
        "💕"
    ];


    balloons.forEach((balloon, index) => {

        const element =
            document.createElement("div");

        element.className = "balloon";

        element.textContent = balloon;

        element.style.left =
            Math.random() * 100 + "%";

        element.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        element.style.animationDelay =
            (Math.random() * 3) + "s";

        container.appendChild(element);

    });

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    const colors = [
        "#ff1493",
        "#ff69b4",
        "#ffffff",
        "#ff4f81",
        "#ff0066"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 3 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHearts() {

    const container =
        document.getElementById("confettiContainer");


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓"
    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position = "absolute";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animation =
            `balloonUp ${
                5 + Math.random() * 5
            }s linear forwards`;

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        container.appendChild(heart);

    }

}


/* =========================================
   CONTINUE TO GALLERY
========================================= */

continueBtn.addEventListener("click", () => {

    celebrationPage.classList.remove("active");

    setTimeout(() => {

        galleryPage.classList.add("active");

        initializeCarousel();

    }, 350);

});


/* =========================================
   3D CAROUSEL
========================================= */

const photos =
    document.querySelectorAll(".photo-card");

let currentIndex = 0;

const totalPhotos = photos.length;


/*
    Position all cards around
    a 3D cylinder.
*/

function initializeCarousel() {

    updateCarousel();

}


function updateCarousel() {

    const angle =
        360 / totalPhotos;

    const radius = 310;


    photos.forEach((photo, index) => {

        let difference =
            index - currentIndex;


        /*
            Keep difference around
            -half to +half
        */

        if (difference > totalPhotos / 2) {
            difference -= totalPhotos;
        }

        if (difference < -totalPhotos / 2) {
            difference += totalPhotos;
        }


        const rotation =
            difference * angle;

        const distance =
            Math.abs(difference);


        const scale =
            Math.max(
                0.65,
                1 - distance * 0.12
            );


        const opacity =
            Math.max(
                0.25,
                1 - distance * 0.22
            );


        photo.style.transform = `
            rotateY(${rotation}deg)
            translateZ(${radius}px)
            scale(${scale})
        `;

        photo.style.opacity = opacity;

        photo.style.zIndex =
            100 - distance;

        photo.style.filter =
            distance === 0
                ? "brightness(1)"
                : "brightness(0.5)";

    });

}


/* =========================================
   CLICK CAROUSEL
========================================= */

photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        /*
            If clicked photo is not center,
            bring it to center first.
        */

        if (index !== currentIndex) {

            currentIndex = index;

            updateCarousel();

            return;

        }


        /*
            Center photo opens fullscreen.
        */

        const image =
            photo.getAttribute("data-image");

        viewerImage.src = image;

        photoViewer.classList.add("show");

    });

});


/* =========================================
   SWIPE SUPPORT
========================================= */

let touchStartX = 0;
let touchEndX = 0;


carousel.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


carousel.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    /*
        Swipe right
    */

    if (distance > 50) {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                totalPhotos - 1;

        }

        updateCarousel();

    }


    /*
        Swipe left
    */

    else if (distance < -50) {

        currentIndex++;

        if (currentIndex >= totalPhotos) {

            currentIndex = 0;

        }

        updateCarousel();

    }

}


/* =========================================
   MOUSE DRAG
========================================= */

let mouseDown = false;
let mouseStartX = 0;


carousel.addEventListener(
    "mousedown",
    (event) => {

        mouseDown = true;

        mouseStartX = event.clientX;

    }
);


window.addEventListener(
    "mouseup",
    (event) => {

        if (!mouseDown) return;

        mouseDown = false;

        const distance =
            event.clientX - mouseStartX;


        if (distance > 50) {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex =
                    totalPhotos - 1;
            }

            updateCarousel();

        }

        else if (distance < -50) {

            currentIndex++;

            if (currentIndex >= totalPhotos) {
                currentIndex = 0;
            }

            updateCarousel();

        }

    }
);


/* =========================================
   FULLSCREEN PHOTO
========================================= */

closeViewer.addEventListener(
    "click",
    () => {

        photoViewer.classList.remove("show");

        viewerImage.src = "";

    }
);


/*
    Click outside image to close
*/

photoViewer.addEventListener(
    "click",
    (event) => {

        if (event.target === photoViewer) {

            photoViewer.classList.remove("show");

            viewerImage.src = "";

        }

    }
);


/*
    ESC key closes image
*/

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            photoViewer.classList.remove("show");

        }

    }
);


/* =========================================
   INITIAL SETUP
========================================= */

console.log(
    "🎂 Birthday website loaded successfully!"
);

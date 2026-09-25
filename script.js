/* =====================================================
   5 SONG MUSIC PLAYER
===================================================== */

const music = document.getElementById("music");


const songs = [

    "song1.mp3",

    "song1.mp3",

    "song1.mp3",

    "song1.mp3",

    "song1.mp3"

];


const songNames = [

    "Song 1 ❤️",

    "Song 1 💕",

    "Song 1 ✨",

    "Song 1 🥹",

    "Song 1 ❤️"

];


let currentSong = 0;


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong() {

    if (!music) return;


    music.src =
        songs[currentSong];


    music.load();


    const name =
        document.getElementById(
            "songName"
        );


    if (name) {

        name.innerText =
            songNames[currentSong];

    }

}


/* =====================================================
   PLAY / PAUSE
===================================================== */

function toggleMusic() {

    if (!music) return;


    if (music.paused) {

        music.play().catch(() => {});

    } else {

        music.pause();

    }

}


/* =====================================================
   NEXT SONG
===================================================== */

function nextSong() {

    currentSong++;


    if (
        currentSong >=
        songs.length
    ) {

        currentSong = 0;

    }


    loadSong();


    music.play().catch(() => {});

}


/* =====================================================
   PREVIOUS SONG
===================================================== */

function previousSong() {

    currentSong--;


    if (currentSong < 0) {

        currentSong =
            songs.length - 1;

    }


    loadSong();


    music.play().catch(() => {});

}


/* =====================================================
   AUTOMATIC NEXT SONG
===================================================== */

if (music) {

    music.addEventListener(
        "ended",
        function() {

            nextSong();

        }
    );

}


/* =====================================================
   PASSWORD
===================================================== */

const PASSWORD = "vivek";


function checkPassword() {

    const input =
        document.getElementById(
            "passwordInput"
        );


    const error =
        document.getElementById(
            "wrongPassword"
        );


    const passwordScreen =
        document.getElementById(
            "passwordScreen"
        );


    const intro =
        document.getElementById(
            "intro"
        );


    if (!input) return;


    if (
        input.value
            .trim()
            .toLowerCase()
        === PASSWORD
    ) {

        error.innerText = "";


        passwordScreen.classList.remove(
            "active"
        );


        setTimeout(
            function() {

                intro.classList.add(
                    "active"
                );


                startTyping();


                window.scrollTo(
                    0,
                    0
                );

            },
            500
        );


        /* START MUSIC */

        if (music) {

            music.play().catch(() => {});

        }


        createHearts(20);

    }

    else {

        error.innerText =
            "Wrong password ❤️";


        input.value = "";

        input.focus();

    }

}


/* =====================================================
   ENTER KEY FOR PASSWORD
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const input =
            document.getElementById(
                "passwordInput"
            );


        if (
            event.key === "Enter" &&
            input &&
            document.activeElement === input
        ) {

            checkPassword();

        }

    }
);


/* =====================================================
   SCREEN CHANGE
===================================================== */

function changeScreen(current, next) {

    const oldScreen =
        document.getElementById(
            current
        );


    const newScreen =
        document.getElementById(
            next
        );


    if (
        !oldScreen ||
        !newScreen
    ) {

        return;

    }


    oldScreen.classList.remove(
        "active"
    );


    setTimeout(
        function() {

            newScreen.classList.add(
                "active"
            );


            /* NORMAL PAGE START */

            window.scrollTo(
                0,
                0
            );

        },
        400
    );

}


/* =====================================================
   EMOTIONAL INTRO
===================================================== */

const message = `Eroju ni roju, Vivekuuu... ❤️

Nuvvu chadivina ventane marchipoye
normal birthday wish cheyali
ani anipiyale

Anduke konni memories,
konni maatlu,
chaala feelings kalipi
ni kosam edi create chesaa.

Nuvvu naa life lo create chesina
chinna chinna moments
appatiki naa memories la
special ga untayi.

And today...

I just want you to smile. ❤️`;


function startTyping() {

    const text =
        document.getElementById(
            "typingText"
        );


    const button =
        document.getElementById(
            "introButton"
        );


    if (
        !text ||
        !button
    ) {

        return;

    }


    text.innerHTML = "";


    button.classList.remove(
        "show"
    );


    let i = 0;


    function type() {

        if (
            i <
            message.length
        ) {

            text.innerHTML +=
                message.charAt(i);


            i++;


            setTimeout(
                type,
                30
            );

        }

        else {

            button.classList.add(
                "show"
            );

        }

    }


    type();

}


/* =====================================================
   SINGLE PICTURES
===================================================== */

function showSinglePictures() {

    changeScreen(
        "intro",
        "singlePictures"
    );


    setupPictures();

}


/* =====================================================
   PICTURE CLICK
===================================================== */

function setupPictures() {

    const pictures =
        document.querySelectorAll(
            ".single-photo"
        );


    pictures.forEach(
        function(picture) {

            if (
                picture.dataset.ready
                === "true"
            ) {

                return;

            }


            picture.dataset.ready =
                "true";


            picture.addEventListener(
                "click",
                function() {

                    pictures.forEach(
                        function(item) {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    this.classList.add(
                        "selected"
                    );


                    createPhotoHearts(
                        this
                    );

                }
            );

        }
    );

}


/* =====================================================
   PHOTO HEARTS
===================================================== */

function createPhotoHearts(photo) {

    const types = [

        "❤️",

        "💗",

        "💖",

        "✨"

    ];


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "photo-heart";


        heart.innerText =
            types[
                Math.floor(
                    Math.random()
                    * types.length
                )
            ];


        heart.style.left =
            Math.random() * 90 +
            "%";


        heart.style.top =
            Math.random() * 75 +
            "%";


        heart.style.fontSize =
            16 +
            Math.random() * 12 +
            "px";


        photo.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            1500
        );

    }

}


/* =====================================================
   LETTER
===================================================== */

function showLetter() {

    /* =====================================================
   OPEN LETTER ENVELOPE
===================================================== */

let letterOpened = false;

function openLetter() {

    if (letterOpened) return;

    letterOpened = true;

    const envelope =
        document.getElementById("envelopeContainer");

    const letter =
        document.getElementById("openedLetter");

    const heart =
        document.querySelector(".heart-seal");

    /* Heart click effect */

    if (heart) {
        heart.style.transform =
            "translate(-50%, -50%) scale(1.5)";

        heart.style.opacity = "0";
    }


    /* Create opening hearts */

    createLetterHearts(35);


    /* Floating words */

    createFloatingLetterWords();


    /* Open envelope */

    setTimeout(function() {

        envelope.classList.add("opening");

    }, 300);


    /* Show letter */

    setTimeout(function() {

        letter.classList.add("show");

    }, 850);

}


/* =====================================================
   FLOATING WORDS
===================================================== */

function createFloatingLetterWords() {

    const container =
        document.getElementById("floatingLetterWords");

    if (!container) return;

    const words = [
        "Vivekuuu ❤️",
        "Happy Birthday ✨",
        "Memories 💕",
        "Smile 😊",
        "Beautiful ✨",
        "bangaram ❤️",
        "nanalu 💫",
        "Happiness 🌸",
        "Kuchu Puchu ❤️",
        "Lots of Love 💕",
        "Best Memories ✨",
        "Happy Birthdayyy 🎂"
    ];

    words.forEach(function(word, index) {

        setTimeout(function() {

            const span =
                document.createElement("span");

            span.className =
                "floating-letter-word";

            span.innerText = word;

            span.style.left =
                Math.random() * 85 + 5 + "%";

            span.style.top =
                Math.random() * 70 + 15 + "%";

            span.style.animationDuration =
                (4 + Math.random() * 3) + "s";

            container.appendChild(span);


            setTimeout(function() {

                span.remove();

            }, 7500);

        }, index * 180);

    });

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createLetterHearts(amount) {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "💘",
        "💝"
    ];

    for (let i = 0; i < amount; i++) {

        setTimeout(function() {

            const heart =
                document.createElement("div");

            heart.className =
                "letter-floating-heart";

            heart.innerText =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (4 + Math.random() * 3) + "s";

            heart.style.setProperty(
                "--heart-x",
                (Math.random() * 180 - 90) + "px"
            );

            document.body.appendChild(heart);


            setTimeout(function() {

                heart.remove();

            }, 7500);

        }, i * 100);

    }

}

    changeScreen(
        "singlePictures",
        "letter"
    );

}


/* =====================================================
   TOGETHER PICTURES
===================================================== */

function showTogether() {

    changeScreen(
        "letter",
        "togetherPictures"
    );

}


/* =====================================================
   FINAL PAGE
===================================================== */

function showFinalPage() {

    changeScreen(
        "togetherPictures",
        "finalPage"
    );


    setTimeout(
        function() {

            createHearts(40);

        },
        700
    );

}



/* =====================================================
   COUNTDOWN
===================================================== */

let countdownStarted = false;


function startCountdown() {

    if (countdownStarted) return;

    countdownStarted = true;

    changeScreen(
        "finalPage",
        "countdownScreen"
    );

    let timeLeft = 60;

    const countdown = document.getElementById("countdown");

    countdown.textContent = "01:00";


    const timer = setInterval(() => {

        timeLeft--;

        const minutes =
            String(Math.floor(timeLeft / 60)).padStart(2, "0");

        const seconds =
            String(timeLeft % 60).padStart(2, "0");

        countdown.textContent =
            `${minutes}:${seconds}`;


        if (timeLeft <= 0) {

            clearInterval(timer);

            countdown.textContent = "00:00";

            revealBirthday();
        }

    }, 1000);
}


/* =====================================================
   FIRST BIRTHDAY REVEAL
   HIS PICTURE + TEXT
   NO CAKE
===================================================== */

function revealBirthday() {

    changeScreen(
        "countdownScreen",
        "birthdayFinal"
    );

    createHearts();
    createConfetti();

    setupFinalPictureEffect();
}


/* =====================================================
   FINAL PICTURE EFFECT
===================================================== */

function setupFinalPictureEffect() {

    const picture =
        document.getElementById("finalPicture");

    if (!picture) return;

    picture.addEventListener("click", () => {

        picture.style.transform = "scale(1.05)";

        picture.style.boxShadow =
            "0 0 40px rgba(255,70,150,.9)";

        for (let i = 0; i < 25; i++) {

            setTimeout(() => {

                createSingleHeart(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );

            }, i * 50);
        }

        setTimeout(() => {

            picture.style.transform = "";
            picture.style.boxShadow = "";

        }, 1000);

    });

}


function createSingleHeart(x, y) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        ["❤️", "💖", "💕", "💗", "✨"][Math.floor(Math.random() * 5)];

    heart.style.left =
        x + (Math.random() * 150 - 75) + "px";

    heart.style.top =
        y + (Math.random() * 100 - 50) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}


/* =====================================================
   NEW SECOND BIRTHDAY SLIDE
===================================================== */

function showBirthdayCelebration() {

    changeScreen(
        "birthdayFinal",
        "birthdayCelebration"
    );

    startBirthdayBalloonCelebration();

    createHearts();
    createConfetti();
}


/* =====================================================
   LOTS OF COLORFUL BALLOONS
===================================================== */

function startBirthdayBalloonCelebration() {

    const container =
        document.getElementById("celebrationBalloons");

    if (!container) return;


    // First large group

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {
            createCelebrationBalloon();
        }, i * 150);

    }


    // Keep creating balloons continuously

    setInterval(() => {

        createCelebrationBalloon();

    }, 700);
}


function createCelebrationBalloon() {

    const container =
        document.getElementById("celebrationBalloons");

    if (!container) return;


    const balloon =
        document.createElement("div");

    balloon.className =
        "celebration-balloon";


    const colors = [
        "#ff4d6d",
        "#ff9f1c",
        "#ffd166",
        "#06d6a0",
        "#00b4d8",
        "#7b2cbf",
        "#f72585",
        "#4cc9f0",
        "#90be6d",
        "#f94144"
    ];


    const color =
        colors[Math.floor(Math.random() * colors.length)];


    balloon.style.background =
        color;

    balloon.style.color =
        color;


    balloon.style.left =
        Math.random() * 100 + "%";


    const size =
        40 + Math.random() * 35;

    balloon.style.width =
        size + "px";

    balloon.style.height =
        size * 1.25 + "px";


    const duration =
        7 + Math.random() * 7;

    balloon.style.animationDuration =
        duration + "s";


    const string =
        document.createElement("span");

    string.className =
        "balloon-string";


    balloon.appendChild(string);

    container.appendChild(balloon);


    setTimeout(() => {

        balloon.remove();

    }, (duration + 1) * 1000);
}


/* =====================================================
   HEARTS
===================================================== */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createSingleHeart(
                Math.random() * window.innerWidth,
                window.innerHeight * .7
            );

        }, i * 100);

    }
}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    if (!container) return;


    const pieces = [
        "✨",
        "💖",
        "🎉",
        "💕",
        "⭐",
        "🎊"
    ];


    for (let i = 0; i < 150; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.textContent =
            pieces[Math.floor(Math.random() * pieces.length)];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            (10 + Math.random() * 18) + "px";


        piece.style.animationDuration =
            (3 + Math.random() * 5) + "s";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(piece);


        setTimeout(() => {
            piece.remove();
        }, 9000);
    }
}


/* =====================================================
   HEART BUTTON CELEBRATION
===================================================== */

function celebrate() {

    createHearts();
    createConfetti();

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createSingleHeart(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }, i * 60);

    }
}


/* =====================================================
   CONTINUOUS FLOATING HEARTS
===================================================== */

function createFloatingHeart() {

    const container =
        document.querySelector(".floating-hearts");

    if (!container) return;


    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    heart.textContent =
        ["❤️", "💖", "💕", "💗", "✨"][Math.floor(Math.random() * 5)];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 11000);
}


setInterval(
    createFloatingHeart,
    400
);


/* =====================================================
   COUNTDOWN BALLOONS
===================================================== */

function createFloatingBalloon() {

    const container =
        document.getElementById("balloonContainer");

    if (!container) return;


    const balloon =
        document.createElement("div");

    balloon.className =
        "floating-balloon";


    const colors = [
        "#ff4d6d",
        "#ff9f1c",
        "#ffd166",
        "#06d6a0",
        "#00b4d8",
        "#9b5de5",
        "#f15bb5"
    ];


    const color =
        colors[Math.floor(Math.random() * colors.length)];


    balloon.style.background =
        color;

    balloon.style.left =
        Math.random() * 100 + "%";


    balloon.style.animationDuration =
        (6 + Math.random() * 5) + "s";


    const string =
        document.createElement("span");

    string.className =
        "balloon-string";


    balloon.appendChild(string);

    container.appendChild(balloon);


    setTimeout(() => {
        balloon.remove();
    }, 12000);
}


/* =====================================================
   START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadSong(0);

        setupPictures();

    }
);
/* =====================================================
   OPEN LETTER
===================================================== */

let letterOpened = false;

function openLetter() {

    if (letterOpened) return;

    letterOpened = true;

    const envelope =
        document.getElementById("envelopeContainer");

    const letter =
        document.getElementById("openedLetter");

    const heart =
        document.querySelector(".heart-seal");

    /* Heart disappears */

    if (heart) {
        heart.style.transform =
            "translate(-50%, -50%) scale(1.5)";

        heart.style.opacity = "0";
    }

    /* Floating hearts */

    createLetterHearts(40);

    /* Floating words */

    createFloatingLetterWords();

    /* Envelope opening */

    setTimeout(function () {
        envelope.classList.add("opening");
    }, 300);

    /* Show letter */

    setTimeout(function () {
        letter.classList.add("show");
    }, 900);
}


/* =====================================================
   FLOATING WORDS
===================================================== */

function createFloatingLetterWords() {

    const container =
        document.getElementById("floatingLetterWords");

    if (!container) return;

    const words = [
        "Vivekuuu ❤️",
        "Happy Birthday ✨",
        "Memories 💕",
        "Smile 😊",
        "Special ❤️",
        "Happiness 🌸",
        "Kuchu Puchu ❤️",
        "Beautiful ✨",
        "Best Memories 💕",
        "Happy Birthdayyy 🎂"
    ];

    words.forEach(function (word, index) {

        setTimeout(function () {

            const span =
                document.createElement("span");

            span.className =
                "floating-letter-word";

            span.innerText = word;

            span.style.left =
                (Math.random() * 80 + 5) + "%";

            span.style.top =
                (Math.random() * 65 + 15) + "%";

            container.appendChild(span);

            setTimeout(function () {
                span.remove();
            }, 7000);

        }, index * 150);
    });
}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createLetterHearts(amount) {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];

    for (let i = 0; i < amount; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

            heart.className =
                "letter-floating-heart";

            heart.innerText =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.setProperty(
                "--heart-x",
                (Math.random() * 180 - 90) + "px"
            );

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 7000);

        }, i * 100);
    }
}
/* =====================================================
   CAKE CANDLE BLAST
===================================================== */

function blastCake() {

    const cake = document.querySelector(".real-cake");
    const candle = document.getElementById("realCandle");
    const blast = document.getElementById("cakeBlast");

    if (!cake) return;

    /* Prevent repeated clicks */
    if (cake.classList.contains("blast")) {
        return;
    }

    /* Start cake blast */
    cake.classList.add("blast");

    /* Create lots of celebration effects */
    createHearts();
    createConfetti();

    /* Extra explosion hearts */
    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createSingleHeart(
                window.innerWidth / 2 +
                (Math.random() * 250 - 125),

                window.innerHeight / 2 +
                (Math.random() * 150 - 75)
            );

        }, i * 40);

    }

    /* Small vibration effect */
    if (navigator.vibrate) {
        navigator.vibrate([100, 60, 100]);
    }

    /* Reset after animation */
    setTimeout(() => {

        cake.classList.remove("blast");

    }, 1800);
}

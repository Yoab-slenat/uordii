
function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
const birthdayMessage = `
 Yordanos Zelalem Gashaw, 💗
Today is your special day, and I want to remind you how wonderful you 
You are one of those people who bring happiness wherever they go. Your smile has its own magic, and your funny personality makes ordinary moments feel special.
Our little ድንቡሽቡሽ! 😂💕
And your personality is bigger than your height! Your playful character, your beautiful smile, and the way you act so happily make you unforgettable.
Never lose that beautiful smile. Never stop being the cheerful, funny, and amazing person you are.
I hope this new chapter of your life brings you endless happiness, genuine friendships, beautiful opportunities, success, and countless reasons to smile.
Remember that you don't have to be perfect to be special. Just being yourself is already something beautiful
Happy Birthday, Yordanos! 🎂🌸

Keep smiling, keep shining, and keep being our lovely ድንቡሽቡሽ! 💖

With lots of birthday wishes!
`;

let typingIndex = 0;
let typingTimer = null;

function openLetter() {
    const letter = document.getElementById("letter");
    const letterButton = document.getElementById("letterButton");
    const typingText = document.getElementById("typingText");
    const lastButton = document.getElementById("lastButton");

    letter.style.display = "block";
    letterButton.style.display = "none";
    typingText.textContent = "";
    lastButton.style.display = "none";

    typingIndex = 0;

    if (typingTimer) {
        clearInterval(typingTimer);
    }

    typingTimer = setInterval(function () {
        if (typingIndex < birthdayMessage.length) {
            typingText.textContent += birthdayMessage.charAt(typingIndex);
            typingIndex++;
        } else {
            clearInterval(typingTimer);
            typingTimer = null;
            lastButton.style.display = "inline-block";
        }
    }, 35);
}

function restartWebsite() {
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
    }

    typingIndex = 0;

    document.getElementById("letter").style.display = "none";
    document.getElementById("letterButton").style.display = "inline-block";
    document.getElementById("typingText").textContent = "";
    document.getElementById("lastButton").style.display = "none";

    nextPage(1);
}

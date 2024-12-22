let loveLevel = 50;  // Start at 50%

// Array of questions for Kuromi to ask
const questions = [
    "Do you think Gerome is the coolest person ever?",
    "Would you pick Gerome in a room full of celebrities?",
    "Would you say that you'll be his forever?",
    "is Gerome better than me?",
    "Would you forgive Gerome tonight?",
    "Would you kiss him underneath the mistletoe?",
    "Do you miss him?"
];

let currentQuestion = 0;

function answer(response) {
    // Adjust love meter based on the answer
    if (response === 'yes') {
        loveLevel += 10;
    } else if (response === 'maybe') {
        loveLevel += 5;
    } else if (response === 'no') {
        loveLevel -= 10;
    }

    // Make sure loveLevel stays between 0 and 100
    loveLevel = Math.min(100, Math.max(0, loveLevel));

    // Update the love meter and question
    updateLoveMeter();
    currentQuestion++;

    if (currentQuestion < questions.length) {
        // Show the next question
        document.getElementById("question").textContent = questions[currentQuestion];
    } else {
        // End the game and show outcome
        showOutcome();
    }
}

function updateLoveMeter() {
    const meter = document.getElementById("meter");
    const loveLevelText = document.getElementById("love-level");
    const kuromiImg = document.getElementById("kuromi-img");

    meter.style.width = loveLevel + "%";
    loveLevelText.textContent = loveLevel;

    // Update Kuromi's image based on love meter
    if (loveLevel <= 30) {
        kuromiImg.src = "https://i.imgur.com/LI7P27s.jpg"; // Low love image
    } else if (loveLevel <= 70) {
        kuromiImg.src = "https://i.imgur.com/Qeu9pzI.jpg"; // Medium love image
    } else {
        kuromiImg.src = "https://i.imgur.com/Rzf5qJD.jpg"; // High love image
    }
}

function showOutcome() {
    const outcomeMessage = document.getElementById("outcome-message");
    const outcomeImg = document.getElementById("outcome-img");

    if (loveLevel >= 80) {
        outcomeMessage.textContent = "Ohhhh youu love himm this muchhh?? Gerome said he is sorry and he misses you, would you please forgive him?";
        outcomeImg.src = "https://i.imgur.com/q6SYKKt.jpg"; // Placeholder for final image
    } else if (loveLevel >= 50) {
        outcomeMessage.textContent = "Awww so you like him do you? I heard that he is misses you, go talk to him.";
        outcomeImg.src = "https://i.imgur.com/EwC7XnU.jpg";
    } else if (loveLevel >= 20) {
        outcomeMessage.textContent = "That's cool,as long as you don't hate him, He misses you so much, forgive him for me please?";
        outcomeImg.src = "https://i.imgur.com/ClaeA9L.jpg";
    } else {
        outcomeMessage.textContent = "Even if you don't like him that much, He lovess you, I can see it in his eyes that you are his forever. He made me just to tell you this, so maybe consider him again?";
        outcomeImg.src = "https://i.imgur.com/s0PsH7Z.jpg";
    }

    outcomeImg.style.opacity = 1;  // Fade in the final result image
    // Hide the answer buttons after the game ends
    document.getElementById("answers").style.display = "none";
}

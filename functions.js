const responses = {
    srk: [
        "Eh-eh-eh-eh",
        "K-k-k-k-kiran!",
        "Kuch kuch hota hai, Anjali, tum nahi samjhogi.",
        "Agar yeh tujhe pyaar karti hai to ye palat ke dekhegi…palat…palat!",
        "Kabhi kabhi jeetne ke liye kuch haarna padta hai. Aur haar ke jeetne waale ko Baazigar kehte hai."
    ],
    bebo: [
        "Woohoo!",
        "Papa ki pari hu main!",
        "Main apni favorite hoon!",
        "Black makes me look thin, and green makes you look fat!",
        "Aye mujhe maasi mat bolo.",
        "Prem!"
    ]
};

function addMessage(message, direction) {
    const messageElement = $('<div></div>').addClass(["message", direction]).text(message);
    $("#message-container").append(messageElement);
}

function showDisclaimer() {
    addMessage("Hi User! I am a bot you can get B-wood nonsense from!", "left");
}

function clearMessages() {
    $("#message-container").empty();
}

function getSelectedBot() {
    return $('#selector').find(":selected").val();
}

function getRandomNumber(upperlimit) {
    return Math.floor(Math.random() * upperlimit);
}

function showBotMessage() {
    const selection = getSelectedBot();
    const messageList = responses[selection];
    const randomIndex = getRandomNumber(messageList.length);
    addMessage(messageList[randomIndex], "left");
}

function getUserMessage() {
    return $("#input-box").val();
}

function clearUserMessage() {
    $("#input-box").val('');
}

function sendUserMessage() {
    const usermessage = getUserMessage();
    if (usermessage === '') {
        return;
    }
    addMessage(usermessage, "right");
    clearUserMessage();
    showBotMessage();
}
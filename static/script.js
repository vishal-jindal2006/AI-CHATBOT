function sendMessage(){

    const input = document.getElementById("user-input");

    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if(userText === "") return;

    // USER MESSAGE

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = userText;

    chatBox.appendChild(userMessage);

    // RESPONSES

    const responses = {

        "hi":"Hello 👋",

        "hello":"Hi there 😊",

        "how are you":"I'm doing great 🚀",

        "what is ai":"AI stands for Artificial Intelligence.",

        "bye":"Goodbye 👋",

        "help":"Try saying hi, hello or ask about AI."
    };

    // BOT MESSAGE

    const botMessage = document.createElement("div");

    botMessage.className = "bot-message";

    botMessage.innerText =
        responses[userText.toLowerCase()]
        || "Sorry 😅 I don't understand that.";

    setTimeout(() => {

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";
}

/* CLEAR CHAT */

function clearChat(){

    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML = `
        <div class="bot-message">
            Hello 👋 Welcome to AI Chatbot
        </div>
    `;
}

/* MOBILE SIDEBAR */

function toggleSidebar(){

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("active");
}
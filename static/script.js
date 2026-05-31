/* SEND MESSAGE */

function sendMessage(){

    const input = document.getElementById("user-input");

    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if(userText === "") return;

    /* USER MESSAGE */

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = userText;

    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    /* CLEAR INPUT */

    input.value = "";

    /* TYPING ANIMATION */

    const typingMessage = document.createElement("div");

    typingMessage.className = "bot-message";

    typingMessage.innerText = "Typing...";

    chatBox.appendChild(typingMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    /* BOT RESPONSE */

    setTimeout(() => {

        typingMessage.remove();

        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        const response =
            responses[userText.toLowerCase()]
            || getSmartResponse(userText);

        botMessage.innerText = response;

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);
}

/* RULE-BASED RESPONSES */

const responses = {

    "hi":"Hello 👋 How can I help you today?",

    "hello":"Hi there 😊",

    "hey":"Hey 👋 Nice to meet you!",

    "good morning":"Good Morning ☀️",

    "good night":"Good Night 🌙",

    "how are you":"I'm doing great 🚀",

    "your name":"I am Professional AI Chatbot 🤖",

    "what is your name":"I am Professional AI Chatbot 🤖",

    "who created you":"I was created by Vishal Jindal 🚀",

    "what can you do":"I can answer predefined questions and chat with you!",

    "help":"Try asking about AI, coding, movies or motivation 🚀",

    "time":new Date().toLocaleTimeString(),

    "date":new Date().toLocaleDateString(),

    "tell me a joke":"Why do programmers hate bugs? Because they make life difficult 😂",

    "motivate me":"Success starts with self-belief 💪",

    "python":"Python is amazing for AI and web development 🐍",

    "html":"HTML creates website structure 🌐",

    "css":"CSS styles websites beautifully 🎨",

    "javascript":"JavaScript adds functionality ⚡",

    "what is ai":"AI stands for Artificial Intelligence 🤖",

    "bye":"Goodbye 👋 Have a wonderful day!",

    "thanks":"You're welcome 😊",

    "thank you":"Happy to help 🚀"
};

/* SMART RESPONSES */

function getSmartResponse(message){

    message = message.toLowerCase();

    if(message.includes("ai")){

        return "Artificial Intelligence is changing the future 🚀";
    }

    else if(message.includes("python")){

        return "Python is powerful for AI and backend development 🐍";
    }

    else if(message.includes("html")){

        return "HTML is used to build website structure 🌐";
    }

    else if(message.includes("css")){

        return "CSS makes websites beautiful 🎨";
    }

    else if(message.includes("javascript")){

        return "JavaScript adds interactivity ⚡";
    }

    else if(message.includes("movie")){

        return "Interstellar is a great sci-fi movie 🚀";
    }

    else if(message.includes("chatbot")){

        return "Chatbots automate communication using AI 🤖";
    }

    else if(message.includes("love")){

        return "Love and coding both need patience ❤️";
    }

    else if(message.includes("study")){

        return "Stay consistent and practice daily 📚";
    }

    else{

        return "Sorry 😅 I don't understand that yet.";
    }
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

/* ENTER KEY SUPPORT */

document
.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();
    }
});

/* VOICE ASSISTANT */

function startVoice(){

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = function(event){

        const voiceText =
            event.results[0][0].transcript;

        document.getElementById("user-input").value =
            voiceText;

        sendMessage();
    };
}
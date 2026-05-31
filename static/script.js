const inputField = document.getElementById("user-input");

const chatBox = document.getElementById("chat-box");

function addMessage(message, className){

    const div = document.createElement("div");

    div.classList.add(className);

    div.innerText = message;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage(){

    const userMessage = inputField.value.trim();

    if(userMessage === ""){
        return;
    }

    addMessage(userMessage, "user-message");

    inputField.value = "";

    const response = await fetch("/get_response", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:userMessage
        })

    });

    const data = await response.json();

    addMessage(data.response, "bot-message");
}

inputField.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});


// Contact Form

document.getElementById("contact-form")

.addEventListener("submit", async function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const response = await fetch("/contact", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            name:name,

            email:email,

            message:message
        })
    });

    const data = await response.json();

    if(data.status === "success"){

        alert("Message Submitted Successfully ✅");

        document.getElementById("contact-form").reset();
    }

});

function clearChat(){

    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML = `
        <div class="bot-message">
            Hello 👋 Welcome to AI Chatbot
        </div>
    `;
}

function toggleSidebar(){

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("show-sidebar");
}
from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Chatbot Responses

responses = {

    # Greetings

    "hi": "Hello 👋 How can I help you today?",

    "hello": "Hi there 😊",

    "hey": "Hey 👋 Nice to meet you!",

    "good morning": "Good Morning ☀️",

    "good afternoon": "Good Afternoon 😊",

    "good evening": "Good Evening 🌙",

    # Basic Questions

    "how are you": "I'm doing great 🚀",

    "your name": "I am an AI Rule-Based Chatbot 🤖",

    "who created you": "I was created by Vishal Jindal 😎",

    "what can you do": "I can answer predefined questions and chat with you!",

    "help": "Try asking greetings, time, date, jokes, motivation or chatbot info.",

    # Time & Date

    "time": f"Current time is {datetime.now().strftime('%H:%M:%S')}",

    "date": f"Today's date is {datetime.now().strftime('%d-%m-%Y')}",

    # Motivation

    "motivate me": "Success starts with self-belief 💪",

    "inspire me": "Push yourself because nobody else will do it for you 🚀",

    "tips for success": "Stay consistent, disciplined and keep learning daily 💯",

    "study tips": "Study in small focused sessions with proper breaks 📚",

    "gym motivation": "Train like a beast 💪 Results take time.",

    # Fun

    "tell me a joke": "Why do programmers hate nature? Because it has too many bugs 😂",

    "fun fact": "Python was named after Monty Python, not the snake 😄",

    # Feelings

    "i am sad": "Don't worry ❤️ Better days are coming.",

    "i am happy": "That's amazing 😍 Keep smiling!",

    "i am tired": "Take some rest 😴 You deserve it.",

    # Technology

    "what is ai": "AI stands for Artificial Intelligence.",

    "what is machine learning": "Machine Learning enables systems to learn from data.",

    "what is deep learning": "Deep Learning is a subset of Machine Learning using neural networks.",

    "what is chatbot": "A chatbot is a software application that simulates conversation.",

    "what is python": "Python is a popular programming language.",

    "what is flask": "Flask is a lightweight Python web framework.",

    "what is programming": "Programming is the process of creating software using code.",

    "what is coding": "Coding means writing instructions for computers.",

    "what is html": "HTML is used to structure web pages.",

    "what is css": "CSS is used for styling websites.",

    "what is javascript": "JavaScript adds functionality to websites.",

    "what is frontend": "Frontend is the visible part of a website.",

    "what is backend": "Backend handles server-side logic and databases.",

    "what is data science": "Data Science is extracting insights from data.",

    # Career

    "how to become ai engineer": "Learn Python, Machine Learning, Deep Learning and build projects 🚀",

    "how to become web developer": "Learn HTML, CSS, JavaScript and backend technologies.",

    "resume tips": "Keep your resume clean, short and project-focused.",

    "interview tips": "Practice projects, communication and coding problems regularly.",

    # Entertainment

    "recommend movie": "You should watch Interstellar 🚀",

    "best actor": "There are many great actors, but everyone has their favorite 😄",

    "best web series": "Breaking Bad is one of the highest-rated series.",

    # AI Personality

    "do you love me": "Of course ❤️ I love talking with you!",

    "are you real": "I am a virtual AI chatbot 🤖",

    "can you think": "I follow predefined rule-based logic.",

    "are you intelligent": "I am intelligent within my programmed rules 😎",

    # Developer Info

    "portfolio": "My developer is building awesome AI projects 🚀",

    "github": "You can upload this project on GitHub for your portfolio.",

    # Weather

    "how is weather": "I cannot check live weather yet 🌤️",

    # Food

    "favorite food": "I don't eat food 😄 but pizza sounds amazing 🍕",

    # Sports

    "favorite sport": "Football and cricket are very popular ⚽🏏",

    # Thanks

    "thank you": "You're welcome 😊",

    "thanks": "Happy to help 🚀",

    # Exit

    "bye": "Goodbye 👋 Have a wonderful day!",

    "exit": "Session ended 👋"
}
# Home Route

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/about")

def about():

    return render_template("about.html")


# Chatbot Route

@app.route("/get_response", methods=["POST"])

def get_response():

    user_message = request.json["message"].lower().strip()

    response = responses.get(

        user_message,

        "Sorry 😅 I don't understand that yet."
    )

    return jsonify({

        "response": response
    })


# Contact Form Route

@app.route("/contact", methods=["POST"])

def contact():

    data = request.json

    name = data["name"]

    email = data["email"]

    message = data["message"]

    # Save messages into text file

    with open("messages.txt", "a", encoding="utf-8") as file:

        file.write(f"\nName: {name}\n")

        file.write(f"Email: {email}\n")

        file.write(f"Message: {message}\n")

        file.write("-" * 40 + "\n")

    return jsonify({

        "status": "success"
    })


# Run App

if __name__ == "__main__":

    app.run(debug=True)
const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

const greetings = [
    "Welcome to my profile! Have a great day! ✨",
    "Thanks for visiting! Keep coding! 🚀",
    "You are awesome! Happy learning! 💻",
    "Stay curious, keep building projects! 🌟"
];

greetBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    message.textContent = greetings[randomIndex];
});


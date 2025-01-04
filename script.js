const startButton = document.getElementById('start-button');
const output = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'fa-IR'; // تنظیم زبان به فارسی

recognition.onstart = () => {
    output.textContent = 'در حال گوش دادن...';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = 'شما گفتید: ' + transcript;
    respondToCommand(transcript);
};

recognition.onerror = (event) => {
    output.textContent = 'خطا: ' + event.error;
};

startButton.addEventListener('click', () => {
    recognition.start();
});

function respondToCommand(command) {
    if (command.includes('سلام')) {
        output.textContent += '\nسلام! چطور می‌توانم به شما کمک کنم؟';
    } else if (command.includes('وقت')) {
        const now = new Date();
        // output.textContent += \nزمان فعلی: ${now.getHours()}:${now.getMinutes()};
    } else {
        output.textContent += '\nمتوجه نشدم.';
    }
}

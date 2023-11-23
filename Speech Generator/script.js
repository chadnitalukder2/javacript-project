let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Check if voices are available
    if (voices.length > 0) {
        speech.voice = voices[0];

        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    }
};

// Manually trigger the event
window.speechSynthesis.onvoiceschanged();

voiceSelect.addEventListener("change", () =>{
speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
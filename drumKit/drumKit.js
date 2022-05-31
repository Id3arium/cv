let drums = document.querySelectorAll(".button")

let soundFiles = {
    "w" : "/drumKit/sounds/crash.mp3",
    "a" : "/drumKit/sounds/kick-bass.mp3tom-1.mp3",
    "s" : "/drumKit/sounds/snare.mp3tom-1.mp3",
    "d" : "/drumKit/sounds/tom-1.mp3tom-1.mp3",
    "j" : "/drumKit/sounds/tom-2.mp3",
    "k" : "/drumKit/sounds/tom-3.mp3",
    "l" : "/drumKit/sounds/tom-4.mp3",
}
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", () => {
        this.style.color = "white"

        let audio = new Audio(soundFiles[this.innerHTML])
        audio.play()
    })
}


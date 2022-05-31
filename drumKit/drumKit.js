let drums = document.querySelectorAll(".drum")

console.log("drums", drums );

let soundFiles = {
    "w" : "sounds/crash.mp3",
    "a" : "sounds/kick-bass.mp3",
    "s" : "sounds/snare.mp3",
    "d" : "sounds/tom-1.mp3",
    "j" : "sounds/tom-2.mp3",
    "k" : "sounds/tom-3.mp3",
    "l" : "sounds/tom-4.mp3",
}

for (let i = 0; i < drums.length; i++) {
    let drum = drums[i]
    drum.addEventListener("click", () => {
        drum.style.color = "white"
        let audio = new Audio(soundFiles[drum.innerHTML])
        audio.play()
    })
}


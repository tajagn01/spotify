document.addEventListener("DOMContentLoaded", () => {

    const toggleAudio = (audioElement, allAudios) => {
       
        if (!audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        } else {
        
            allAudios.forEach(audio => {
                if (!audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
            audioElement.play();
        }
    };

   
    const gloryCard = document.getElementById("glory-card");
    const gloryAudio = document.getElementById("glory-audio");

    const aashiquiCard = document.getElementById("aashiqui-card");
    const aashiquiAudio = document.getElementById("aashiqui-audio");

    const song3Card = document.getElementById("song3-card");
    const song3Audio = document.getElementById("song3-audio");

    const song4Card = document.getElementById("song4-card");
    const song4Audio = document.getElementById("song4-audio");

   
    const allAudios = document.querySelectorAll("audio");

 
    gloryCard.addEventListener("click", () => toggleAudio(gloryAudio, allAudios));
    aashiquiCard.addEventListener("click", () => toggleAudio(aashiquiAudio, allAudios));
    song3Card.addEventListener("click", () => toggleAudio(song3Audio, allAudios));
    song4Card.addEventListener("click", () => toggleAudio(song4Audio, allAudios));
});

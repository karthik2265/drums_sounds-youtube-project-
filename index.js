window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];


    // lets get going with the sounds
    pads.forEach(function (pad, index) {

        pad.addEventListener("click", function () {

            console.log(pad, index);
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);

        });
    });

    // create a function that makes bubbles 
    const createBubbles = function (index) {
        const bubble = document.createElement("div");
        const visuals = document.querySelector("div .visuals");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function () {
            visuals.removeChild(this);
            console.log(this);
        });

    };
});
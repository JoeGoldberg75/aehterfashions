document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("hero-video");
    const videoContainer = document.querySelector(".hero-video-container");

    // Function to check if the user has scrolled down enough
    function playVideoOnScroll() {
        const scrollPosition = window.scrollY;
        const heroHeight = document.querySelector(".hero").offsetHeight;

        console.log(`Scroll Position: ${scrollPosition}, Hero Height: ${heroHeight}`);

        if (scrollPosition > heroHeight / 3) {
            console.log("Condition met, playing video...");
            videoContainer.classList.add("video-visible");
            video.play();  // Explicitly play video
            window.removeEventListener("scroll", playVideoOnScroll);
        }
    }

    // Listen for scroll event
    window.addEventListener("scroll", playVideoOnScroll);
});



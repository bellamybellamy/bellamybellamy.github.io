document.addEventListener("DOMContentLoaded", function() {
    const enterText = document.getElementById("enterText");

    // Function to fade the text in and out
    function fadeInOut() {
        enterText.style.opacity = (enterText.style.opacity === "0") ? "1" : "0"; // Toggle opacity
    }

    // Interval to repeat the fade effect every 1.5 seconds
    const fadeInterval = setInterval(fadeInOut, 1500);

    // Event listener to stop the fade effect and transition the screen when clicked
    document.querySelector("a.full-screen-click").addEventListener("click", function() {
        clearInterval(fadeInterval); // Stop the fade effect
        handleFullScreenClick(); // Transition the screen
    });

    // Initial delay before starting the fade effect
    setTimeout(fadeInOut, 1000);
});

function handleFullScreenClick() {
    const mainContent = document.querySelector("main");

    // Transition the entire screen upwards
    mainContent.style.transition = "transform 0.5s ease-in-out";
    mainContent.style.transform = "translateY(-100vh)";
}

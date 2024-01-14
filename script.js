let darkMode = false;

function changeDarkMode() {
    const darkLightButton = document.getElementById("dark-light-mode");

    if (darkMode) {
        // En mode clair
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#fff");
        darkLightButton.innerHTML = "Dark mode";
        darkLightButton.classList.remove("dark-light-button");
      
    } else {
        // En mode sombre
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        darkLightButton.innerHTML = "Light mode";
        darkLightButton.classList.add("dark-light-button");
        
    }
}

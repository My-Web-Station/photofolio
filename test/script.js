function toggleTheme() {
    var body = document.body;
    var themeToggle = document.getElementById("theme-toggle");
    var icon = themeToggle.querySelector("i");

    // Toggle between light and dark themes
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        body.classList.add("dark-theme");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}

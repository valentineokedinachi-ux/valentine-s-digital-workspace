

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function (e) {

    e.preventDefault();

    // Prevent multiple clicks
    enterBtn.style.pointerEvents = "none";

    // Show loading animation
    enterBtn.innerHTML = `
        <span>Opening Workspace</span>
        <span class="loader"></span>
    `;

    // Fade page
    document.body.classList.add("page-exit");

    // Open portfolio after animation
    setTimeout(() => {

        window.location.href = "portfolio.html";

    }, 1800);

});
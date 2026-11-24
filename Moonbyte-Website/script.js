
// =================================
// MOONBYTE WEBSITE JAVASCRIPT
// =================================

// 1. AUTOMATIC COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// 2. SHARE PROFILE FUNCTION
const shareButton = document.getElementById("shareButton");
const status = document.getElementById("status");

if (shareButton && status) {
    shareButton.addEventListener("click", async () => {
        const profile = {
            title: "Moonbyte | Gaming Profile",
            text: "Check out my gaming socials! Follow Moonbyte!",
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(profile);
                status.textContent = "Thanks for sharing! 💗";
            } else if (
                navigator.clipboard &&
                window.isSecureContext
            ) {
                await navigator.clipboard.writeText(profile.url);
                status.textContent = "Profile link copied! 💗";
            } else {
                status.textContent =
                    "Copy the website URL from your browser.";
            }
        } catch (error) {
            if (error.name !== "AbortError") {
                status.textContent = "Unable to share right now.";
            }
        }
    });
}

// 3. PINK MOUSE GLOW EFFECT
const glow = document.querySelector(".mouse-glow");

if (glow) {
    document.addEventListener("mousemove", (event) => {
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
    });

    // 4. HIDE GLOW ON TOUCH DEVICES
    if (window.matchMedia("(pointer: coarse)").matches) {
        glow.style.display = "none";
    }
}

// 5. SOCIAL BUTTON CLICK EFFECT
const socialButtons = document.querySelectorAll(".social-links a");

socialButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.opacity = "0.7";

        setTimeout(() => {
            button.style.opacity = "1";
        }, 200);
    });
});

// 6. WELCOME MESSAGE
console.log(
    "%c WELCOME TO MOONBYTE! ",
    "background: #ff4fa3; color: white; font-size: 18px; padding: 10px;"
);

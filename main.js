function showHeartsSequentially() {
    let index = 0;
    const hearts = [];
    const interval = setInterval(() => {
        if (index >= 50) {
            clearInterval(interval);
            return;
        }
        const heart = document.createElement("div");
        heart.classList.add("heart");

        let left, top;
        do {
            left = `${Math.random() * 90}%`;
            top = `${Math.random() * 90}%`;
        } while (
            hearts.some((existingHeart) => {
                const existingLeft = parseFloat(existingHeart.style.left);
                const existingTop = parseFloat(existingHeart.style.top);
                const distance = Math.sqrt(Math.pow(existingLeft - parseFloat(left), 2) + Math.pow(existingTop - parseFloat(top), 2));
                return distance < 10;
            })
        );

        heart.style.left = left;
        heart.style.top = top;

        hearts.push(heart);
        index++;
    }, 300);

    let currentIndex = 0;
    const displayInterval = setInterval(() => {
        if (currentIndex >= hearts.length) {
            clearInterval(displayInterval);
            return;
        }
        document.getElementById("container").appendChild(hearts[currentIndex]);
        hearts[currentIndex].style.opacity = 1;
        currentIndex++;
    }, 300);
}
showHeartsSequentially();

function disabled(id) {
    const btn = document.getElementById(id);
    btn.addEventListener("mouseenter", () => {
        const randomX = Math.random() * (window.innerWidth - btn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - btn.offsetHeight);
        btn.style.position = "absolute";
        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";
    });
}

disabled("disabled");
disabled("disabled1");

function showText(id, delay, callback) {
    const text = document.getElementById(id);
    const originalText = text.textContent;
    let index = 0;

    function showNextLetter() {
        if (index < originalText.length) {
            text.textContent = originalText.slice(0, index + 1);
            index++;
        } else {
            clearInterval(interval);
            callback();
        }
    }

    const interval = setInterval(showNextLetter, delay);
}
showText("title", 200, () => {});
showText("desc", 50, () => {
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";
});

function oke() {
    let audio = document.getElementById("myAudio");
    audio.play();
    const ok = document.querySelector(".fulfilled");
    const box = document.querySelector(".box");
    ok.style.display = "block";
    box.style.display = "none";
}

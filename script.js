let count = 0;

const btn = document.getElementById("btn");
const meme = document.getElementById("meme");
const title = document.getElementById("title");

btn.addEventListener("click", function() {
    count++;

    if (count < 10) {
        // Move button randomly
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        btn.style.left = x + "px";
        btn.style.top = y + "px";
    } else {
        // 10th click
        btn.style.display = "none";
        title.style.display = "none";
        meme.style.display = "block";
    }
});

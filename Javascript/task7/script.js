const text = document.getElementById("sampleText");

const bgBtn = document.getElementById("bg");
const incBtn = document.getElementById("inc");
const centerBtn = document.getElementById("center");
const resetBtn = document.getElementById("reset");

const colors = ["red", "yellow", "lightgreen", "blue", "pink"];
let i = 0;

let originalBg = window.getComputedStyle(text).backgroundColor;
let originalSize = window.getComputedStyle(text).fontSize;
let originalAlign = window.getComputedStyle(text).textAlign;

bgBtn.onclick = function () {
    text.style.backgroundColor = colors[i];
    i++;

    if (i === colors.length) {
        i = 0;
    }
};

incBtn.onclick = function () {
    let size = parseInt(window.getComputedStyle(text).fontSize);
    text.style.fontSize = (size + 2) + "px";
};

centerBtn.onclick = function () {
    text.style.textAlign = "center";
};

resetBtn.onclick = function () {
    text.style.backgroundColor = originalBg;
    text.style.fontSize = originalSize;
    text.style.textAlign = originalAlign;

    i = 0;
};

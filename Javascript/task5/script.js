document.getElementById("analyzeBtn").addEventListener("click", function () {
let text = document.getElementById("inputText").value.trim();
let resultBox = document.getElementById("resultBox");


if (text === "") {
resultBox.innerHTML = "<p>Please enter some text.</p>";
return;
}

let charCount = text.length;

 let words = text.split(" ");
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            wordCount++;
        }
    }

let reversed = text.split("").reverse().join("");


resultBox.innerHTML = `
<p><strong>Total Characters:</strong> ${charCount}</p>
<p><strong>Total Words:</strong> ${wordCount}</p>
<p><strong>Reversed Text:</strong> ${reversed}</p>
`;
});
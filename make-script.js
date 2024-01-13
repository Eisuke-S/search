const fiveLetterWords = ["春風", "夢見て", "静かな", "秋夜に", "朝陽が", "美しい"];
const sevenLetterWords = ["月光舞う", "星が輝く", "澄んだ空", "雲の影", "川の流れる"];

function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function generateHaiku() {
    const line1 = getRandomWord(fiveLetterWords);
    const line2 = getRandomWord(sevenLetterWords);
    const line3 = getRandomWord(fiveLetterWords);

    const haikuContainer = document.getElementById("haiku-container");
    haikuContainer.innerHTML = `<p>${line1}</p><p>${line2}</p><p>${line3}</p>`;
}

const fiveLetterWords = ["春風は", "夢見てた", "静寂な", "秋夜に", "朝陽みる","美しい"];
const sevenLetterWords = ["月光舞", "星降る夜", "澄んだ空", "雲の影", "川の流れ"];

function getRandomWord(wordList, syllables) {
    const filteredWords = wordList.filter(word => word.length === syllables);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

function generateHaiku() {
    const line1 = getRandomWord(fiveLetterWords, 5);
    const line2 = getRandomWord(sevenLetterWords, 7);
    const line3 = getRandomWord(fiveLetterWords, 5);

    const haikuContainer = document.getElementById("haiku-container");
    haikuContainer.innerHTML = `<p>${line1}</p><p>${line2}</p><p>${line3}</p>`;
}

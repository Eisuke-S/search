const fiveLetterWords = ["春風に","夢を見て","静かな夜","秋夜に","朝陽が","美しい","君と二人","愛してる","叶えたい","優しき愛","君の微笑み","笑顔の契り","花咲く頃","君との出逢い","心満たす","君との旅","胸躍る愛","笑顔の誓い","君に捧ぐ","真実の誓い","君の微笑み","魅惑の夜","君との距離"];
const sevenLetterWords = ["月光舞う","星が輝く","澄んだ空","雲の影","川の流れる","優しき愛","君の微笑み","笑顔の契り","花咲く頃","君との出逢い","心満たす","君との旅","胸躍る愛","笑顔の誓い","君に捧ぐ","真実の誓い","君の微笑み","魅惑の夜","君との距離","笑顔の秘密","君への想い","輝く瞬間","君との幸せ","笑顔の交差","君の温もり","甘い誘惑","君を感じて","恋のメロディ"];
const fiveLetterWords_2 = ["大好きです","白昼夢","きれいだな","ラビリンス","","美しい"];
function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function generateHaiku() {
    const line1 = getRandomWord(fiveLetterWords);
    const line2 = getRandomWord(sevenLetterWords);
    const line3 = getRandomWord(fiveLetterWords_2);

    const haikuContainer = document.getElementById("haiku-container");
    haikuContainer.innerHTML = `<p>${line1}</p><p>${line2}</p><p>${line3}</p>`;
}

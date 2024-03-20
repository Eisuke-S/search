// ページが読み込まれたら、ローディング画面を非表示にする
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading');
  loadingScreen.style.animation = 'fadeout 1.5s ease-in-out forwards';
  setTimeout(function() {
      loadingScreen.style.display = 'none';  
  // 1秒後に実行したいコードをここに記述する
  }, 1000); // 1秒をミリ秒で指定
});
var selectElement = document.getElementById("consent");
var TermsOfUse = document.getElementById("terms-of-use");
var wordsfrvrBtn = document.getElementById("wordsfrvr-btn");
var wordsfrvr = document.getElementById("wordsfrvr");
var game = document.getElementById("game");
var content = document.getElementById("content");
selectElement.addEventListener('change', () => {
  // 現在選択されているオプションの値を取得
  var selectedValue = selectElement.value;
  if (selectedValue === "yes") { 
    TermsOfUse.style.animation = 'fadeout 2s ease-in-out forwards';
    content.style.display = 'block';
    setTimeout(function() {
        TermsOfUse.style.display = 'none'; 
    // 1秒後に実行したいコードをここに記述する
    }, 3000); // 1秒をミリ秒で指定
  } else if (selectedValue === "no") { 
    window.alert("ゲームをプレイできません。はいを選択しなければ5秒後にリダイレクトします。");
    setTimeout(function() {
      window.location.href = "https://eisuke-s.github.io/search";
    }, 5000);
  }
});
wordsfrvrBtn.onclick = function() {
  game.style.display = 'block';
  wordsfrvr.style.display = 'block';
  wordsfrvrBtn.style.display = 'none';
};

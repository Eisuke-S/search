// ページが読み込まれたら、ローディング画面を非表示にする
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading');
  loadingScreen.style.animation = 'fadeout 1s ease-in-out forwards';
  setTimeout(function() {
      loadingScreen.style.display = 'none';  
  // 1秒後に実行したいコードをここに記述する
  }, 1000); // 1秒をミリ秒で指定
});
var selectElement = document.getElementById("consent");
var TermsOfUse = document.getElementById("terms-of-use");
selectElement.addEventListener('change', () => {
  // 現在選択されているオプションの値を取得
  var selectedValue = selectElement.value;
  if (selectedValue ==="yes") { 
    TermsOfUse.style.animation = 'fadeout 3s ease-in-out forwards';
    setTimeout(function() {
        TermsOfUse.style.display = 'none';  
    // 1秒後に実行したいコードをここに記述する
    }, 3000); // 1秒をミリ秒で指定
  } else if (selectedValue === "no") { 
    window.location.href = "https://eisuke-s.github.io/search";
  }
});

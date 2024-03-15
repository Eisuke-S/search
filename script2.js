// ページが読み込まれたら、ローディング画面を非表示にする
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.animation = 'fadeIn 1s ease-in-out forwards';
  setTimeout(function() {
      loadingScreen.style.display = 'none';  
  // 1秒後に実行したいコードをここに記述する
  }, 1000); // 1秒をミリ秒で指定
  
  
});

var input = document.getElementById("input");
var button = document.getElementById("button");
var aiButton = document.getElementById("ai");
var clear = document.getElementById("clear");
var photo = document.getElementById("photo")；
var body = document.getElementById("body");
var selectElement = document.getElementById("background-image");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
  
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
selectElement.addEventListener('change', () => {
  
  
  // 現在選択されているオプションの値を取得
  var selectedValue = selectElement.value;
  // 背景画像を変更します
  body.style.backgroundImage = "url('" + selectedValue + "')";
});
function handleInput() {
  // ここに入力が変更されたときの処理を追加します
}
                               
document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    button.click();
  }
});

function addParagraph() {
    // 入力フィールドからテキストを取得
    var history_place = document.getElementById("history_place");
    var text = document.getElementById("input").value;
    
    // 新しいpタグを作成し、テキストを設定
    var history = document.createElement("p");
    history.innerText = text;
    
    // pタグにクラスを追加
    history.classList.add("history");
    
    // 新しいボタンタグを作成
    var history_btn = document.createElement("button");
    history_btn.setAttribute("id", "history_btn");
    
    
    // 新しいダイブタグを作成
    var history_box = document.createElement("div");
    history_box.setAttribute("id", "history_box");
    var history_box_2 = document.createElement("div");
    history_box_2.setAttribute("id", "history_box_2");
    // pタグとボタンタグをダイブタグの中にまとめる
    document.getElementById("history_place").appendChild(history_box_2);
    history_box_2.appendChild(history_box);
    history_box.appendChild(history);
    history_box.appendChild(history_btn);
    
    
    var history_btn_img = document.createElement("img");
    history_btn_img.setAttribute("src", "history_btn.png");
    history_btn_img.setAttribute("id", "history_btn_img");
    history_btn.appendChild(history_btn_img);
    // ボタンがクリックされたときの動作を設定
    history_btn.onclick = function() {
        // ボタンが含まれるダイブタグを取得
        var parentDiv = this.parentElement;
        
        // ダイブタグ内のpタグの内容を取得
        var paragraphContent = parentDiv.querySelector("p").innerText;
        input.value = "";
        // インプットタグにpタグの内容を書き加える
        document.getElementById("input").value += paragraphContent;
     };
    
    
}
// いずれかのボタンが押されたときの処理
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.id === 'clear') {
                input.blur();
                input.value = "";
                input.rows = 1;
                return;
            } else {
                addParagraph()
                var buttonurl = this.dataset.url;
                var query = input.value;
              
                input.value = "";
                var url = buttonurl + query; // buttonurlを使用する
                window.open(url, "_blank");
            }
        });
    });
});













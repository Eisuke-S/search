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
// HTML要素を取得します
var body = document.getElementById("body");
var selectElement = document.getElementById("background-image");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
  

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
// いずれかのボタンが押されたときの処理
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
         　 if (this.id === 'clear') { // 例えばIDが'Clear'のボタンを除外
               input.blur();
               input.value = "";
               input.rows = 1;
             　return; // 処理を中断して以降のコードを実行しない
            } else if (this.id === 'modal') { // 例えばIDが'Clear'のボタンを除外
             　return; // 処理を中断して以降のコードを実行しない
            } else if (this.id === 'btn') { // 例えばIDが'Clear'のボタンを除外
               modal.style.display = "block";
             　return; // 処理を中断して以降のコードを実行しない
            } else if (this.id === 'span') { // 例えばIDが'Clear'のボタンを除外
               modal.style.display = "none";
             　return; // 処理を中断して以降のコードを実行しない
            }      
            // ここにボタンが押されたときの処理を書く
            var buttonValue = this.value;
            var query = input.value;
            input.value = "";
            var url = button + query;
            window.open(url, "_blank");
        });
    });
});

button.onclick = function addParagraph() {
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

button.addEventListener("click", function() {
  var query = input.value;

  input.value = "";
  var url = "https://www.google.com/search?q=" + query;
  window.open(url, "_blank");
});

aiButton.addEventListener("click", function() {
  
  var query = input.value;
  var url = "https://www.bing.com/search?form=NTPCHT&showconv=1&sendquery=1&q=" + query;
  input.value = "";
  window.open(url, "_blank");
});

photo.addEventListener("click", function() {
  
  var query = input.value;
  var url = "https://www.google.com/search?q=" + query + "&sca_esv=575726020&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiV4Oiu4YuCAxWjgVYBHfmrDZQQ_AUoAXoECAMQAw&biw=1482&bih=750&dpr=1.25";
  input.value = "";
  window.open(url, "_blank");
});

translate.addEventListener("click", function() {
  
  var query = input.value;
  var url = "https://www.deepl.com/ja/translator#en/ja/" + query;
  input.value = ""; 
  window.open(url, "_blank");
});

clear.addEventListener("click", function() {
  input.blur();
  input.value = "";
  input.rows = 1;
});




window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

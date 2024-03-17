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
var photo = document.getElementById("photo");
var body = document.getElementById("body");
var selectElement = document.getElementById("background-image");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var line = document.getElementById("line");
var line_1 = document.getElementById("line_1");
var line_2 = document.getElementById("line_2");
var historyElement; // グローバルスコープで定義
var result = document.getElementById("result");
var resultText = document.getElementById("result-text");
var resultLink = document.getElementById("result-link");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    button.click();
  }
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
span.onclick = function() {
    modal.style.display = "none";
};
function makeresult() {
    var text = document.getElementById("input").value;
    if (text === "えいすけ") {
       result.style.display = "block";
       resultText.appendChild("イケメン");
       resultLink.appendChild("サイトはこちら");
       history_btn_img.setAttribute("href", "https://eisuke-s.github.io/search/");
    }
}
function addParagraph() {
    // 入力フィールドからテキストを取得
    var history_place = document.getElementById("history_place");
    var text = document.getElementById("input").value;
    // 新しいpタグを作成し、テキストを設定
    historyElement = document.createElement("p");
    historyElement.innerText = text;
    // pタグにクラスを追加
    historyElement.classList.add("history");
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
    history_box.appendChild(historyElement);
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
            } else if (this.classList.contains('close')) {
                modal.style.display = "none";
                return;
            } else if (this.id === 'myBtn') {
                modal.style.display = "block";　
                return;
            }else {
                addParagraph()
                makeresult()
                var buttonurl = this.dataset.url;
                var query = input.value;
              
                input.value = "";
                var url = buttonurl + query; // buttonurlを使用する
                window.open(url, "_blank");
            }
        });
    });
});
selectElement.addEventListener('change', () => {
  // 現在選択されているオプションの値を取得
  var selectedValue = selectElement.value;
  // 背景画像を変更します
  body.style.backgroundImage = "url('" + selectedValue + "')";
  var selectedcolor = selectElement.dataset.color;
  historyElement.style.color = selectedcolor;
  var selectedtheme = selectElement.dataset.theme;
  if (selectedtheme === 'dark') {
    body.style.color = "#fff";
    body.style.backgroundColor = "black";
    input.style.color = "#fff";
    line.style.backgroundColor = "#fff";
    line_1.style.backgroundColor = "black";
    line_2.style.backgroundColor = "black";
  } else if (selectedtheme === 'light') {
    body.style.color = "black";
    body.style.backgroundColor = "#fff";
    input.style.color = "black";
    line.style.backgroundColor = "black";
    line_1.style.backgroundColor = "black";
    line_2.style.backgroundColor = "black";
  } 
});

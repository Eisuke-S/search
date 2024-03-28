// ページが読み込まれたら、ローディング画面を非表示にする
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.animation = 'fadeout 1s ease-in-out forwards';
  setTimeout(function() {
      loadingScreen.style.display = 'none';  
  // 1秒後に実行したいコードをここに記述する
  }, 1000); // 1秒をミリ秒で指定
});
// 許可する国のコード
var allowedCountries = ["US", "CA", "GB"]; // 例: アメリカ、カナダ、イギリス

// IPアドレスから国コードを取得するAPI
var ipLookupApi = "https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=";

// ページ読み込み時に実行
window.addEventListener('load', function() {
    // IPアドレスを取得し、国コードを確認する
    fetch(ipLookupApi)
    .then(response => response.json())
    .then(data => {
        var countryCode = data.country_code;
        // 国コードが許可された国のリストに含まれていない場合、アクセスをブロックする
        if (!allowedCountries.includes(countryCode)) {
            window.location.href = "index.html"; // リダイレクト先のページ
        }
    })
    .catch(error => console.error('Error:', error));
};
// 相手のデバイスのローカル時間が日本の標準時間の前後15分以内かどうかを判別する関数
window.addEventListener('load', function isWithinFifteenMinutesOfJapanTime() {
    var japanTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    japanTime = new Date(japanTime);

    var opponentTime = new Date(); // 相手のデバイスの時間を取得
    var differenceInMinutes = (opponentTime.getTime() - japanTime.getTime()) / (1000 * 60); // 分単位で時差を計算

    return Math.abs(differenceInMinutes) <= 15; // 時差が15分以内かどうかを判別
}

// テスト
if (isWithinFifteenMinutesOfJapanTime()) {
    console.log("相手のデバイスの時間は日本の標準時間の前後15分以外です。");
} else {
    console.log("相手のデバイスの時間は日本の標準時間の前後15分以外です。");
}

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
var resultbtn = document.getElementById("resultbtn");
var resultLinkText = document.getElementById("result-link-text");
var resultTittle = document.getElementById("result-tittle");
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    button.click();
  }
  input.style.height = "3.2em";
  setTimeout(function() {
    input.style.height = "1.2em";
  }, 10000); 
});
function hidecontent() {
    btn.style.animation = 'zoomin 0.3s ease-in-out forwards'; 
    modal.style.animation = 'fadeout 0.3s ease-in-out forwards';
    setTimeout(function() {
      modal.style.display = "none";
      return;                  
    }, 300); 
};
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
window.onclick = function(event) {
  if (event.target == modal) {
     hidecontent() 
  }
};
span.onclick = function() {
    hidecontent()
};
// いずれかのボタンが押されたときの処理
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.id === 'clear') {
                input.blur();
                input.value = "";
                input.rows = 1;
            } else if (this.id === 'myBtn') {
                btn.style.animation = 'zoomout 0.3s ease-in-out forwards';
              　setTimeout(function() {
                  modal.style.display = "block";
                  modal.style.animation = 'fadein 0.3s ease-in-out forwards';
                  // 1秒後に実行したいコードをここに記述する
                }, 300); 
            } else if (this.id === 'resultbtn') {
                result.style.display = "none";　
            }else {
                addParagraph()
                var buttonurl = this.dataset.url;
                var buttonafterurl = this.dataset.afterUrl;
                var query = input.value;
                input.value = "";
                var url = buttonurl + query + buttonafterurl;
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
  const historycolor = selectElement.getAttribute('data-color'); 
  historyElement.style.color = historycolor;
});

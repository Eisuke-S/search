var input = document.getElementById("input");
var button = document.getElementById("button");
var aiButton = document.getElementById("ai");
var clear = document.getElementById("clear");
function handleInput() {
    var input = document.getElementById("input");
    var rowCount = input.value.split("\n").length;

    if (rowCount < prevRowCount) {
        input.rows = rowCount > 1 ? rowCount : 1;
    } else if (rowCount > 3) {
        input.rows = 3;
    } else {
        input.rows = rowCount;
    }

    prevRowCount = rowCount;

    // 枠の高さも調整
    input.style.height = "auto";
    input.style.height = (input.scrollHeight) + "px";

    // 最大で3行の高さに制限
    if (input.rows >= 3) {
        input.style.overflowY = "scroll";
        input.style.height = "calc(3em + 2px)";
    } else {
        input.style.overflowY = "hidden";
    }
}


document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    button.click();
  }
});
button.onclick = function addParagraph() {
    // 入力フィールドからテキストを取得
    var text = document.getElementById("input").value;
    
    // 新しいpタグを作成し、テキストを設定
    var history = document.createElement("p");
    history.innerText = text;
    
    // pタグにクラスを追加
    history.classList.add("history");
    
    // 新しいボタンタグを作成
    var history_btn = document.createElement("button");
    history_btn.setAttribute("id", "history_btn");
    history_btn.innerText = "Add to input";
    
    // 新しいダイブタグを作成
    var history_box = document.createElement("div");
    history_box.setAttribute("id", "history_box");
    // pタグとボタンタグをダイブタグの中にまとめる
    divhistory_place.appendChild(history);
    history_place.appendChild(history_btn);
    
    // ダイブタグをページに追加
    document.getElementById("history_box").appendChild(history_place);
    
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


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

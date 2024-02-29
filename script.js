var input = document.getElementById("input");
var button = document.getElementById("button");
var aiButton = document.getElementById("ai");
var clear = document.getElementById("clear");

var prevRowCount = 1;

function handleInput() {
    var input = document.getElementById("input");
    var rowCount = input.value.split("\n").length;

    if (rowCount < prevRowCount) {
        input.rows = rowCount > 1 ? rowCount : 1;
    } else if (rowCount > prevRowCount && rowCount <= 3) {
        input.rows = rowCount + 1;
    } else {
        // 行数が変化しないか、3行以上の場合は何もしない
    }

    prevRowCount = rowCount;

    // 枠の高さも調整
    input.style.height = "auto";
    input.style.height = (input.scrollHeight) + "px";
}




document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    button.click();
  }
});

button.addEventListener("click", function() {
  var query = input.value;
  input.value = "";
  var element = document.getElementById('return');
  if (element) {
    element.style.display = 'block';
  }
  var url = "https://www.google.com/search?q=" + query;
  window.open(url, "_blank");
});

aiButton.addEventListener("click", function() {
  var query = input.value;
  input.value = "";
  var url = "https://www.bing.com/search?form=NTPCHT&showconv=1&sendquery=1&q=" + query;
  window.open(url, "_blank");
});

photo.addEventListener("click", function() {
  var query = input.value;
  input.value = "";
  var url = "https://www.google.com/search?q=" + query + "&sca_esv=575726020&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiV4Oiu4YuCAxWjgVYBHfmrDZQQ_AUoAXoECAMQAw&biw=1482&bih=750&dpr=1.25";
  window.open(url, "_blank");
});

translate.addEventListener("click", function() {
  var query = input.value;
  input.value = "";
  var url = "https://www.deepl.com/ja/translator#en/ja/" + query;
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

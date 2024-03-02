<?php
// フォームから送信されたデータを受け取る
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

// ここでデータベースに接続し、ユーザー情報を保存する処理を行う
// この例では仮にデータベースに接続する処理のみを示します

// データベースに接続する
$servername = "localhost";
$db_username = "root";
$db_password = "";
$dbname = "user_database";

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// 接続エラーのチェック
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ユーザー情報をデータベースに挿入する
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "登録が完了しました";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

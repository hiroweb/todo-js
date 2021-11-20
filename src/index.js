import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //spanタグ生成
  const span = document.createElement("span");
  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";
  span.innerText = text;
  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタンを押したときの処理
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素を取得
    const addTarget = completeButton.parentNode;

    //todo内テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    //spanタグ生成
    const span = document.createElement("span");
    span.innerText = text;
    console.log(span);
    const li = document.createElement("li");
    li.className = "list-row";
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタンを押したときの処理
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liタグの子要素に各要素を設定
    li.appendChild(span);
    li.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
    console.log(li);
  });
  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  deleteButton.innerText = "削除";

  //liの下にspanを設定
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//==============================================
// ★課題　DOM操作を使用して文字表示を変えよう
//==============================================
// 1. 画面からHTML要素を取得し、定数に代入する
const targetBtn = document.getElementById('btn');
const textMessage = document.getElementById('text');

// 2. ボタンクリックイベントをHTML要素に紐付ける
targetBtn.addEventListener('click', () => { 
  // 2.1. テキスト文字を入れ替える
  textMessage.textContent = 'ボタンをクリックしました';
});

// EOF
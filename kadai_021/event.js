//==============================================
// 課題　非同期処理を使用して、2秒後に文章を書き換えよう
//==============================================
// 1. 画面からHTML要素を取得し、定数に代入する
const targetBtn = document.getElementById('btn');
const textMessage = document.getElementById('text');

// 2. ボタンクリックイベントをHTML要素に紐付ける
targetBtn.addEventListener('click', () => { 
  // 2.1. 2秒後にテキスト文字を入れ替える
  setTimeout(() => {
    textMessage.textContent = 'ボタンをクリックしました';
  }, 2000);
});

// EOF
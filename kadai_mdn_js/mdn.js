// 今日の日付を取り出す
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDate();

// 取り出した西暦4桁年＋月日を下記フォーマットで出力する
console.log(currentYear + '年' + currentMonth+ '月' + currentDay+ '日');

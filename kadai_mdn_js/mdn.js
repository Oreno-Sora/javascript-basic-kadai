// 今日の日付を取り出す
let now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();

// 取り出した西暦4桁年＋月日を下記フォーマットで出力する
console.log(currentYear + '年' + currentMonth+ '月' + currentDay+ '日');

// ---------------------------------------
// 課題14：関数を使用して計算をしよう
// ---------------------------------------
// １．引数の値を2乗した値を返す関数を定義する
const squareData = (num) => {
  return num * num;
}

// ２．サンプルデータ 28、4、11、197で関数を呼び出してみる
let inputNum, outputNum;

inputNum = 28;
outputNum = squareData(inputNum);
console.log('入力値' + inputNum + 'のとき、2乗値は' + outputNum + 'です');

inputNum = 4;
outputNum = squareData(inputNum);
console.log('入力値' + inputNum + 'のとき、2乗値は' + outputNum + 'です');

inputNum = 11;
outputNum = squareData(inputNum);
console.log('入力値' + inputNum + 'のとき、2乗値は' + outputNum + 'です');

inputNum = 197;
outputNum = squareData(inputNum);
console.log('入力値' + inputNum + 'のとき、2乗値は' + outputNum + 'です');

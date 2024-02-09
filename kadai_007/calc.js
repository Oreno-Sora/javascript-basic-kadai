// ---------------------------------------
// 課題7：条件分岐を使用して倍数を表示しよう
// ---------------------------------------
// 入力値が3の倍数か5の倍数かを調べる関数を定義する
const checkNumber = (num) => {
  let isMultipleOf3, isMultipleOf5;
  isMultipleOf3 = !(num % 3);
  isMultipleOf5 = !(num % 5);

  // 入力値が3と5の倍数の場合、その旨を出力する
  if (isMultipleOf3 === true && isMultipleOf5 === true) {
    console.log('3と5の倍数です')
  }
  // 入力値が3の倍数で5の倍数でない場合、3の倍数であることを出力する
  else if (isMultipleOf3 === true) {
    console.log('3の倍数です');
  }
  // 入力値が5の倍数で3の倍数でない場合、5の倍数であることを出力する
  else if (isMultipleOf5 === true) {
    console.log('5の倍数です');
  }
  // 入力値が3の倍数でも5の倍数でもない場合、入力値を出力する
  else {
    console.log(num);
  }
}

// 各条件分岐に入るように関数に数値を与えてみる
let inputNum;

// まず15で調べる（3と5の公倍数である値）
inputNum = 15; 
checkNumber(inputNum);

// 次に6で調べる（3の倍数であり5の倍数でない値）
inputNum = 6;
checkNumber(inputNum);

// 今度は10で調べる(5の倍数であり3の倍数でない値)
inputNum = 10;
checkNumber(inputNum);

// 最後に14で調べる（3の倍数でも5の倍数でもない値）
inputNum = 14;
checkNumber(inputNum);

// EOF
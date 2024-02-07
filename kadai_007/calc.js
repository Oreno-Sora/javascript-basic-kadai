// ---------------------------------------
// 課題7：条件分岐を使用して倍数を表示しよう
// ---------------------------------------
// まず、変数numにランダムな整数を代入する
let num = Math.floor(Math.random() * 10);

// 次に、入力値が3の倍数か5の倍数かを調べる
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

// EOF
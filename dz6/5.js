let number = window.prompt('Введите целое число', '1');

while (number % 3 === 0) {
    number = number / 3;
}
if (number === 1){
    console.log(true);
}else{
    console.log(false);
}
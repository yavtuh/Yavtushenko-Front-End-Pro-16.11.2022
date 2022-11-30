let number = window.prompt('Введите целое число', '1');

if (Number(number) === 0 || Number(number) === 1){
    console.log("Не простое число");
}

if (Number(number) === 2 || Number(number) === 3){
    console.log("Простое число");
}

for (let i = 2; i <= number / 2; i++) {

    if (number % i === 0) {
        console.log("Не простое число");

    }
    else{
        console.log("Простое число")
    }
}
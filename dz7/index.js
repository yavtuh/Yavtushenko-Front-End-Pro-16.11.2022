const count = Number(window.prompt('Введите длинну массива'));
let a = [];
for (let i = 0; i < count; i++){
    a.push(Number(window.prompt(`Введите ${i} элемент массива`)))
}

console.log(a);

for (let j = a.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (a[i] > a[i + 1]) {
            let temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
        }
    }
}

a.splice(2,3)

document.body.innerHTML = a;
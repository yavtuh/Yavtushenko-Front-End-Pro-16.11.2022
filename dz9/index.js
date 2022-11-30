let length = window.prompt('Введи длину строки для генерации');
let characters  = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let result_html  = '';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result_html += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return document.body.innerHTML = result_html;
}

generateKey(length, characters)
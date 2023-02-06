const number = prompt("Введи ID поста: ");
const result = document.querySelector('#result');
const button = document.querySelector('.api');
const url = 'https://jsonplaceholder.typicode.com/posts/';

button.addEventListener('click', function (e) {
    fetch(`${url}`+ `${number}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return response.json().then(error => {
                const err = new Error("Невірний ID")
                result.innerHTML = "Помилка: " + err
                err.data = error
                throw err
            })
        })
        .then((response) => {
            result.innerHTML = "userId: " + response.id + '</br>' + "title: " + response.title + "</br>" + "body: " + response.body
        })
})

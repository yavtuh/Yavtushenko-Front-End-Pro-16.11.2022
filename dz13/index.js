const buttonBuy = document.querySelector('#buy');
const form = document.querySelector('.form');
const table = document.querySelector(".table");
const table_body = table.querySelector('tbody');

buttonBuy.addEventListener("click", function (e) {
    form.classList.toggle('show');
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pib = e.target.querySelector('#pib').value;
    const city = e.target.querySelector('#city').value;
    const np = e.target.querySelector('#np').value;
    const payment_method = e.target.querySelector('#payment_method').value;
    const quantity = e.target.querySelector('#quantity').value;
    const comment = e.target.querySelector('#comment').value;

    if (pib.length === 0 || city.length === 0 || np.length === 0 || payment_method.length === 0 || quantity.length === 0 || comment.length === 0){
        e.target.innerHTML += '<div class="alert alert-danger" role="alert">Не всі дані введено</div>'
    }else{
        table.classList.add("show");
        table_body.innerHTML += `<tr><td>${pib}</td><td>${city}</td><td>${np}</td><td>${payment_method}</td><td>${quantity}</td><td>${comment}</td></tr>`;


    }


});

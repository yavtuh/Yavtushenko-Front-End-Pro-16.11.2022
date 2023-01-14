const form = document.querySelector('.form');
const table = document.querySelector(".table");
const table_body = table.querySelector('tbody');


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.querySelector('#name').value;
    const age = e.target.querySelector('#age').value;
    const gender = e.target.querySelector('input[name="gender"]:checked')?.value;
    const language = e.target.querySelector('input[name="language"]:checked')?.value;
    const city = e.target.querySelector('#city').value;
    const address = e.target.querySelector('#address').value;


    if (name.length === 0 || age.length === 0 || gender === undefined || language === undefined || city.length === 0 || address.length === 0){
        e.target.innerHTML += '<div class="alert alert-danger" role="alert">Не всі дані введено</div>'
    }else{
        e.target.classList.add("hide");
        table.classList.add("show");
        table_body.innerHTML += `<tr><td>${name}</td><td>${age}</td><td>${gender}</td><td>${city}</td><td>${address}</td><td>${language}</td></tr>`;

    }


});

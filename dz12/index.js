const buttonLink = document.querySelector('#link');
const buttonRedirect = document.querySelector('#redirect');
let link;

buttonLink.addEventListener('click', function (){
    link = window.prompt('Введіть силку');
});

buttonRedirect.addEventListener('click', function (){
    let typeLink =  link.split(":");
    if (typeLink[0] === 'https') {
        window.location.assign(link);
    } else {
        window.location.assign('https:'+typeLink[1]);
    }
});


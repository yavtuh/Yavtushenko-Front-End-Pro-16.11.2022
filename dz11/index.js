const folder = {
    0: "1.jpg",
    1: "2.jpg",
    2: "3.jpg",
    3: "4.jpg",
    4: "5.jpg",
    5: "6.jpg",
    6: "7.jpg",
    7: "8.jpg",
    8: "9.jpg"
};

let random = Math.floor(Math.random() * Object.keys(folder).length);
let img = `<img src="img/${folder[random]}" >`
document.querySelector('.img').innerHTML = img;git add .
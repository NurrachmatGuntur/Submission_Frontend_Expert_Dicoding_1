// //GET DATA JSON DAN DITAMPILKAN
import data from "../DATA.json";
const content = document.querySelector("#content");

data.restaurants.forEach((restaurant) => {
  content.innerHTML += `
        <div class="card">
        <img class="gambar-resto" src="${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="card-content">
        <h2 class="nama-resto">Restaurant Nama : ${restaurant.name}</h2>
        <p class="kota-resto">Kota : ${restaurant.city}</p>
            <p class="rating-resto">Rating: ${restaurant.rating}</p>
            <p class="deskripsi-resto">${restaurant.description.substring(
              0,
              250
            )}....</p>
        </div>
        </div>
    `;
});



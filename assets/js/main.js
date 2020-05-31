// TODO:
// Manage the search option form the user
// Manage to add the hero in favorites


// const api_url = "https://www.superheroapi.com/api.php/2656567927911258/search/";

const searchBtn = document.querySelector("#search");

const searchInput = document.getElementById('searchByname');

const herosContainer = document.querySelector(".hero-container");

let heros = [];

function getData(url) {
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            heros = data.results;
        })
        .catch(err => console.log("error : " + err));
}

searchBtn.addEventListener('click', () => {
    const url = `https://www.superheroapi.com/api.php/2656567927911258/search/${searchInput.value}`;

    getData(url);

    heros.forEach(hero => {
        herosContainer.innerHTML += `<div class="hero-card" >
        <div class="hero-image-container">
          <img
            src="${hero.image.url}"
            alt=""
          />
        </div>
        <div class="hero-info-container">
          <p>${hero.name}</p>
        </div>
        <div class="more-info">
          <a href="#" class="about">About</a>
          <i class="far fa-star favorite"></i>
        </div>
      </div>`   
    });

    
},setTimeout(5000,() =>{
    herosContainer.innerHTML = '';
})











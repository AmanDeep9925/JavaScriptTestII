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
            herosContainer.innerHTML += `
            <div class="hero-card" >
            <div class="hero-image-container"">
              <img
                src="${hero.image.url}"
                alt=""
              />
            </div>
            <div class="hero-info-container">
              <p>${hero.name}</p>
            </div>
            <div class="more-info" data-key=${hero.id}>
              <a href="#" class="about">About</a>
              <i class="far fa-star favourite" ></i>
            </div>
          </div>`   
        });
    })


    // list of favourites superheros
    const favourites = [];
    
    const addFav = document.querySelector('#heros');
    
    addFav.addEventListener("click",(event) =>{
        if(event.target.classList.contains("favourite")){
            key = event.target.parentElement.dataset.key;
            addToFavourites(key);
            event.target.classList.toggle('fas')
        }
    })
    
    function addToFavourites(key){
        heros.forEach(hero =>{
            if(hero.id === key){
                favourites.push(hero);
            }
        })
    }

    const home = document.getElementById('HOME');
    const favContainer = document.getElementById("favouriteHero");

    const fav = document.getElementById('FAV');
    const HContainer = document.getElementById("home")


    home.addEventListener('click',()=>{
        
        // console.log("hi");
        favContainer.style.display = "none";
        HContainer.style.display ="block";
    })

    

    fav.addEventListener('click',()=>{
        
        // console.log("hi");
        HContainer.style.display = "none";
        favContainer.style.display = "block";
        const favContainers = document.getElementById('fav-heros');
        favourites.forEach(hero => {
            favContainers.innerHTML +=`
            <div class="hero-card" >
            <div class="hero-image-container"">
              <img
                src="${hero.image.url}"
                alt=""
              />
            </div>
            <div class="hero-info-container">
              <p>${hero.name}</p>
            </div>
            <div class="more-info" data-key=${hero.id}>
              <a href="#" class="about">About</a>
              <i class="fas fa-star favourite" ></i>
            </div>
          </div>
            `
        });
    })



// rendering the favourite superhero




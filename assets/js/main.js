// TODO:
// Manage the search option form the user
// Manage to add the hero in favorites


const api_url = "https://www.superheroapi.com/api.php/2656567927911258/search/captainamerica";

function getData(url) {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data.results[0])
    })
}
//call getData function
getData(api_url);

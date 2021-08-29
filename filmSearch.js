var filmQuery = localStorage.getItem("passFilm");
var btn = document.getElementById("searchS");

if(btn.addEventListener("click",   createSearch)){
}
else{
  getapi(filmQuery)
}
function createSearch(){
    var x = document.getElementById("idText").value;
    var url =`https://swapi.dev/api/films/${x}/`;
    localStorage.setItem("passFilm",url)
    getapi(url);

}

// Defining async function
async function getapi(url) {
 
// Storing response
const response = await fetch(url);

// Storing data in form of JSON
 this.data = await response.json();



 ////Characters
 if(data.characters != null ){
    this.chMap = new Map();
  
    for(i=0;i<data.characters.length;i++){
      const characters = await fetch(data.characters[i]);
    var character = await characters.json();
    this.chMap.set(data.characters[i],character.name)
    
    }
  
    // console.log(speciesT)
  }



//Species
if(data.species != null ){
    this.speciesMap = new Map();
  
    for(i=0;i<data.species.length;i++){
      const species = await fetch(data.species[i]);
    var speciesT = await species.json();
    this.speciesMap.set(data.species[i],speciesT.name)
    
    }
  
    // console.log(speciesT)
  }
  
  
  //vehicles
  if(data.vehicles != null ){
    this.vehiclesMap = new Map();
  
    for(i=0;i<data.vehicles.length;i++){
      const vehicles = await fetch(data.vehicles[i]);
    var vehicle = await vehicles.json();
    this.vehiclesMap.set(data.vehicles[i],vehicle.name)
    
    }
    // console.log(vehicle)
  }
   //planets
   if(data.planets != null ){
    this.planetsMap = new Map();
  
    for(i=0;i<data.planets.length;i++){
      const planets = await fetch(data.planets[i]);
    var planet = await planets.json();
    this.planetsMap.set(data.planets[i],planet.name)
    
    }
    // console.log(vehicle)
  }
  

//starships
if(data.starships != null ){
    this.ShipMap = new Map();
  
    for(i=0;i<data.starships.length;i++){
      const ships =  await fetch(data.starships[i]);
    var ship = await ships.json();
    this.ShipMap.set(data.starships[i],ship.name)
    
    }
    // console.log(ship.name)
  }



if (response) {
  hideloader();
  

}
show(data);
}
// Calling that async function
// getapi(api_url);
// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table

function show(data) {
    let tab = 
    `<tr>
      <th>Title</th>
      <th>Episode ID</th> 
      <th>Opening Crawl</th>
      <th>Director</th>
      <th>Producer</th>
      <th>Release Date</th>
     </tr>`;
// Loop to access all rows 
// for (let r of data.list) {
        tab += `<tr> 
    <td>${data.title} </td>
    <td>${data.episode_id}</td> 
    <td>${data.opening_crawl}</td> 
    <td>${data.director}</td>
    <td>${data.producer}</td>          
    <td>${data.release_date}</td>
</tr>`;
tab += 
`<tr>
  <th>Planets</th>
  <th>Starships</th> 
  <th>Vehicles</th>
  <th>Species</th>
  <th>Characters</th>

 </tr>
 <tr><td>`
 for(i=0;i<data.planets.length;i++){
    tab+=`<button onclick="setPlanet(${i})"><p>${this.planetsMap.get(this.data.planets[i])}</p></button>`;     ///ref the website and a function that sends the data 
    }`</td>`;
    tab+=`<td>`
    for(i=0;i<data.starships.length;i++){
    tab+=`<button onclick="setStarShip(${i})"><p>${this.ShipMap.get(this.data.starships[i])}</p></button>`;     ///ref the website and a function that sends the data 
    }`</td>`;
    tab+=`<td>`
    for(i=0;i<data.vehicles.length;i++){
    tab+=`<button onclick="setVehicle(${i})"><p>${this.vehiclesMap.get(this.data.vehicles[i])}</p></button>`;     ///ref the website and a function that sends the data 
    }`</td>`;
    tab+=`<td>`
    for(i=0;i<data.species.length;i++){
    tab+=`<button onclick=""><p>${this.speciesMap.get(this.data.species[i])}</p></button>`;     ///ref the website and a function that sends the data 
    }`</td>`;
    tab+=`<td>`
for(i=0;i<data.characters.length;i++){
tab+=`<button onclick="setCharacter(${i})"><p>${this.chMap.get(this.data.characters[i])}</p></button>`;     ///ref the website and a function that sends the data 
}`</td>`;


// Setting innerHTML as tab variable
document.getElementById("chName").innerHTML =`<h1>${data.title}</h1>` ;
document.getElementById("character").innerHTML = tab;
}
function setVehicle(z){
    var vehicless = data.vehicles[z];
    localStorage.setItem("passVehicle",vehicless)
    location.replace("vehicles.html")
  
    }
  function setCharacter(z){
    var character = data.characters[z];
    localStorage.setItem("passCh",character)
    location.replace("index.html")
  
    }

    function setStarShip(z){
      var starShip = data.starships[z];
      localStorage.setItem("pStarShip",starShip)
      location.replace("starships.html")
    
      }

      function setPlanet(z){
        var planet = data.planets[z];
        localStorage.setItem("passPlanet",planet)
        location.replace("planets.html")
      
        }
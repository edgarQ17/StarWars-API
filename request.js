
const api_url = 
"https://swapi.dev/api/people/1/";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
 this.data = await response.json();



if(data.homeworld != null ){
  const hWorld = await fetch(data.homeworld);
   this.world = await hWorld.json();
  //  this.wname = world.name;
  // console.log(world.name)

}

//films
if(data.films != null ){
  this.filmsMap = new Map();

  for(i=0;i<data.films.length;i++){
    const films = await fetch(data.films[i]);
  var film = await films.json();
  this.filmsMap.set(data.films[i],film.title)
  
  }

  // console.log(filmsMap.get(data.films[0]))
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


//starships
if(data.starships != null ){
  this.ShipMap = new Map();

  for(i=0;i<data.starships.length;i++){
    const ships = await fetch(data.starships[i]);
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
getapi(api_url);
// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table

function show(data) {
let tab = 
  `<tr>
    <th>Full Name</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Hair Color</th>
    <th>Skin Color</th>
    <th>Eye Color</th>
    <th>Birth Year</th>
    <th>Gender</th>
   </tr>
   `;

// Loop to access all rows 
// for (let r of data.list) {
  tab += `<tr> 
<td>${data.name} </td>
<td>${data.height}</td>
<td>${data.mass}</td> 
<td>${data.hair_color}</td>
<td>${data.skin_color}</td>
<td>${data.eye_color}</td>          
<td>${data.birth_year}</td>          
<td>${data.gender}</td>          

</tr>
<tr>
    <th>Homeworld</th>
    <th>Films</th>
    <th>Species</th>
    <th>Vehicles</th>
    <th>Starships</th>
</tr>

<tr> 
<td>${this.world.name} </td>
<td>`
for(i=0;i<data.films.length;i++){
  tab+=`<a href="${data.films[i]}">${this.filmsMap.get(data.films[i])}</a> <br/>`;
}`</td>`;
tab+=`
<td>${data.species}</td> 
<td>`
for(i=0;i<data.vehicles.length;i++){
  tab+=`<button onclick="sayHi(${i})">${this.vehiclesMap.get(data.vehicles[i])}</button>`;     ///ref the website and a function that sends the data 
}`</td>`;
tab+=`
<td>`
for(i=0;i<data.starships.length;i++){
  tab+=`<a href="${data.starships[i]}">${this.ShipMap.get(data.starships[i])}</a> <br/>`;
}`</td>`;
tab+=`      
</tr>
`;





// }
// Setting innerHTML as tab variable
document.getElementById("chName").innerHTML =`<h1>${data.name}</h1>` ;
document.getElementById("character").innerHTML = tab;

} 
function sayHi(z){
  var vehicless = data.vehicles[z];
  localStorage.setItem("passVehicle",vehicless)
  }

// export let Name = (name) => {return "My name is " + name;}

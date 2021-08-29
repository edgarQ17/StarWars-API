var starShipQuery = localStorage.getItem("pStarShip");
var btn = document.getElementById("searchS");

if(btn.addEventListener("click",   createSearch)){
}
else{
  getapi(starShipQuery)
}
function createSearch(){
    var x = document.getElementById("idText").value;
    var url =`https://swapi.dev/api/starships/${x}/`;
    localStorage.getItem("pStarShip",url);
    getapi(url);

}

// Defining async function
async function getapi(url) {
 
// Storing response
const response = await fetch(url);

// Storing data in form of JSON
 this.data = await response.json();

//films
// console.log(this.data)
if(data.films != null ){
  this.filmsMap = new Map();

  for(i=0;i<data.films.length;i++){
    const films = await fetch(data.films[i]);
  var film = await films.json();
  this.filmsMap.set(data.films[i],film.title)
  
  }

  // console.log(filmsMap.get(data.films[0]))
}



//pilots
if(data.pilots != null ){
  this.pilotsMap = new Map();

  for(i=0;i<data.pilots.length;i++){
    const pilots = await fetch(data.pilots[i]);
  var pilot = await pilots.json();
  this.pilotsMap.set(data.pilots[i],pilot.name)
  
  }
//   console.log(pilot)
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
      <th>Name</th>
      <th>Model</th> 
      <th>Manufacturer</th>
      <th>Cost in Credits</th>
      <th>Length</th>
      <th>Cargo capacity</th>
      <th>Consumables</th>
     </tr>`;
// Loop to access all rows 
// for (let r of data.list) {
        tab += `<tr> 
    <td>${data.name} </td>
    <td>${data.model}</td> 
    <td>${data.manufacturer}</td> 
    <td>${data.cost_in_credits}</td>
    <td>${data.length}</td>          
    <td>${data.cargo_capacity}</td>
    <td>${data.consumables}</td>          
</tr>`;
tab += 
`<tr>
  <th>Crew</th>
  <th>Films</th> 
  <th>Max Atmosphering Speed</th>
  <th>HyperDrive Rating</th>
  <th>Pilots</th>
  <th>StarShip Class</th>
  <th>MGLT </th>
 </tr>
 <tr> 
<td>${data.crew} </td>
<td>`
console.log(data.films.length)
for(i=0;i<data.films.length;i++){
tab+=`<button onclick="setFilm(${i})"><p>${this.filmsMap.get(this.data.films[i])}</p></button>`;     ///ref the website and a function that sends the data 
}`</td>`;
tab+=`
<td>${data.max_atmosphering_speed}</td> 
<td>${data.passengers}</td>
<td>`
for(i=0;i<data.pilots.length;i++){
tab+=`<button onclick="setCharacter(${i})"><p>${this.pilotsMap.get(this.data.pilots[i])}</p></button>`;     ///ref the website and a function that sends the data 
}`</td>`;
tab+=`  
<td>${data.vehicle_class}</td>     
<td>${data.MGLT}</td>      
</tr>`;

// Setting innerHTML as tab variable
document.getElementById("chName").innerHTML =`<h1>${data.name}</h1>` ;
document.getElementById("character").innerHTML = tab;
}
function setFilm(z){
  var films = data.films[z];
  localStorage.setItem("passFilm",films)
  location.replace("films.html")

  }
  function setCharacter(z){
    var character = data.pilots[z];
    localStorage.setItem("passCh",character)
    location.replace("index.html")
  
    }
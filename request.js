
const api_url = 
"https://swapi.dev/api/people/1/";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
if(data.homeworld != null ){
  const hWorld = await fetch(data.homeworld);
  var world = await hWorld.json();
   this.wname = world.name;
  console.log(world.name)

}

const films = await fetch(data.films[0]);
var film = await films.json();

console.log(film)


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
<td>${this.wname} </td>
<td>${data.films}</td>
<td>${data.species}</td> 
<td>${data.vehicles}</td>
<td>${data.starships}</td>
<td>${data.eye_color}</td>          
<td>${data.birth_year}</td>          
<td>${data.gender}</td>          
</tr>
`;
// }
// Setting innerHTML as tab variable
document.getElementById("chName").innerHTML =`<h1>${data.name}</h1>` ;
document.getElementById("character").innerHTML = tab;

} 
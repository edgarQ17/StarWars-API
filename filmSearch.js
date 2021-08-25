// import { Name} from './request.js';
var vehicleQuery = localStorage.getItem("passVehicle");

const api_url = vehicleQuery;

fetch(api_url)
.then(res=>res.json())
.then(hideloader())
.then(json=>show(json));


  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    console.log(data)
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Model</th> 
          <th>Manufacturer</th>
          <th>Cost in Credits</th>
         </tr>`;
    
    // Loop to access all rows 
    // for (let r of data.list) {
        tab += `<tr> 
    <td>${data.name} </td>
    <td>${data.model}</td> 
    <td>${data.manufacturer}</td> 
    <td>${data.cost_in_credits}</td>          
</tr>`;
    // Setting innerHTML as tab variable
    document.getElementById("chName").innerHTML =`<h1>${data.name}</h1>` ;
    document.getElementById("character").innerHTML = tab;
    }
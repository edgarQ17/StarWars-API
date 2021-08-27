
var vehicleQuery = localStorage.getItem("passVehicle");
getapi(vehicleQuery);

var btn = document.getElementById("searchS");

btn.addEventListener("click", createSearch);

function createSearch(){
    var x = document.getElementById("idText").value;
    var url =`https://swapi.dev/api/vehicles/${x}/`;
    getapi(url);

}


function getapi(url){
const api_url = url;
fetch(api_url)
.then(res=>res.json())
.then(json=>compile(json)
);


}

function compile(j){
    // if(j.films !=null){
    //     this.filmsMap = new Map();
    //     for(i=0;i<j.films.length;i++){
    //         var key = j.films[i];
    //         fetch(j.films[i])
    //         .then(res=>res.json())
    //         .then(json=> this.filmsMap.set(key,json.title));
    //     }

    if(j.films !=null){
       this.films = [];
      for(let i=0;i<j.films.length;i++){
        fetch(j.films[i])
                .then(res=>res.json())
                .then(json=>this.films.push(json.title));
         
      }
   }
        show(j);
    }


// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table
function show(data) {
   
//     if(data.pilots !=null){
//        var pilots = [];
//       for(let i=0;i<data.pilots.length;i++){
//           pilots.push(data.passengers[i]);
//       }
//    }

 console.log(this.filmsMap)
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
          <th>Passengers</th>
          <th>Pilots</th>
          <th>Vehicle Class</th>
         </tr>
         <tr> 
    <td>${data.crew} </td>
    <td>`
for(i=0;i<data.films.length;i++){
    console.log(this.films[i])
  tab+=`<button onclick="sayHi(${i})">${this.films[i]}</button>`;     ///ref the website and a function that sends the data 
}`</td>`;
    tab+=`
    <td>${data.max_atmosphering_speed}</td> 
    <td>${data.passengers}</td>
    <td>${data.pilots}</td>          
    <td>${data.vehicle_class}</td>          
</tr>`;

    // Setting innerHTML as tab variable
    document.getElementById("chName").innerHTML =`<h1>${data.name}</h1>` ;
    document.getElementById("character").innerHTML = tab;
    }
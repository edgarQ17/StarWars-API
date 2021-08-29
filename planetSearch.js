
    var planetQuery = localStorage.getItem("passPlanet");
    var btn = document.getElementById("searchS");
console.log(planetQuery)
    if(btn.addEventListener("click",   createSearch)){
    }
    else{
      getapi(planetQuery)
    }
    function createSearch(){
      var x = document.getElementById("idText").value;

      parseInt(x)
      if(x>0 ){
        var url =`https://swapi.dev/api/planets/${x}/`;
        localStorage.getItem("passPlanet",url);
        getapi(url);
      }
      else {
        alert("enter a valid integer! and greater than 0");
      }

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
    
    
    
    //vehicles
    if(data.residents != null ){
      this.residentMap = new Map();
    
      for(i=0;i<data.residents.length;i++){
        const residents = await fetch(data.residents[i]);
      var resident = await residents.json();
      this.residentMap.set(data.residents[i],resident.name)
      
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
          <th>Rotation Period</th> 
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity capacity</th>
          <th>Terrain</th>
         </tr>`;
    // Loop to access all rows 
    // for (let r of data.list) {
            tab += `<tr> 
        <td>${data.name} </td>
        <td>${data.rotation_period}</td> 
        <td>${data.orbital_period}</td> 
        <td>${data.diameter}</td>
        <td>${data.climate}</td>          
        <td>${data.gravity}</td>
        <td>${data.terrain}</td>          
    </tr>`;
    tab += 
    `<tr>
      <th>Surface Water</th>
      <th>Population</th>
      <th>Films</th> 
      <th>Residents</th>
     </tr>
     <tr> 
<td>${data.surface_water} </td>
<td>${data.population}</td>      
<td>`
console.log(data.films.length)
for(i=0;i<data.films.length;i++){
tab+=`<button onclick="setFilm(${i})"><p>${this.filmsMap.get(this.data.films[i])}</p></button>`;     ///ref the website and a function that sends the data 
}`</td>`;
tab+=`
<td>`
for(i=0;i<data.residents.length;i++){
tab+=`<button onclick="setCharacter(${i})"><p>${this.residentMap.get(this.data.residents[i])}</p></button>`;     ///ref the website and a function that sends the data 
}`</td>`;
tab+=`  
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
        var character = data.residents[z];
        localStorage.setItem("passCh",character)
        location.replace("index.html")
      
        }
        
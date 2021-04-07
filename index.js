fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
.then(response => response.json())
.then(data => displayEpisodes(data));


function displayEpisodes(data){
   var episodes = document.getElementById('episodes'); 
   alert(data);
}

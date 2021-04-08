
fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
.then(response => response.json())
.then(data => displayEpisodes(data));

var season = 2;

function displayEpisodes(data){
   var episodes = document.getElementById('episodes'); 
   for (var i=0; i<data.length; i++){
       if (data[i].season == season){
       episodes.append("Episode "+data[i].episode+": "+data[i].title);
       }
   }
}
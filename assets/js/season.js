
document.getElementById("brba1").onclick = function() {fetchEpisodes("Breaking+Bad", 1)};
document.getElementById("brba2").onclick = function() {fetchEpisodes("Breaking+Bad", 2)};
document.getElementById("brba3").onclick = function() {fetchEpisodes("Breaking+Bad", 3)};
document.getElementById("brba4").onclick = function() {fetchEpisodes("Breaking+Bad", 4)};
document.getElementById("brba5").onclick = function() {fetchEpisodes("Breaking+Bad", 5)};


function fetchEpisodes(series, season)
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad")
    .then(response => response.json())
    .then(data => displayEpisodes(data, season));


function displayEpisodes(data, season){
   var episodes = document.getElementById('episodes'); 
   for (var i=0; i<data.length; i++){
       if (data[i].season == season){
       episodes.append("Episode "+data[i].episode+": "+data[i].title);
       }
   }
}


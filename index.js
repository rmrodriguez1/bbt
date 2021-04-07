fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
.then(response => response.json())
.then(data => displayEpisodes(data));


function displayEpisodes(data){
   var episodes = document.getElementById('episodes'); 
   for (var i=0; i<data.length; i++){
       episodes.append(data[i].title);
   }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

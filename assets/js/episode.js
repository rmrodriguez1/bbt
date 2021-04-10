
window.onload = (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const series = urlParams.get('series');
    const season = urlParams.get('season');
    const episode_id = urlParams.get('episode');

    var title = document.getElementById('title'); 
    title.innerText = series + " Season " + season;

    fetchInfo(series, season, episode_id);
};

function fetchInfo(series, season, episode_id){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes/" + episode_id)
    .then(response => response.json())
    .then(data => displayInfo(data, series, season, episode_id));
}


function displayInfo(data, series, season, episode_id){

    data = data[0]

    var name = document.getElementById('episode'); 
    name.innerText = "Episode " + data.episode + ": " + data.title;

    var date = document.getElementById('date'); 
    date.innerText = "Air date: " + data.air_date;

    var id = document.getElementById('id'); 
    id.innerText = "Episode id: " + episode_id;

    var episodes = document.getElementById('characters'); 
    for (var i=0; i<data.characters.length; i++)
    {
        var li = document.createElement('li');
        var newNode = document.createElement('a');
        newNode.href = "character.html?name=" + data.characters[i];
        newNode.innerText = data.characters[i];
        li.appendChild(newNode)
        episodes.appendChild(li);
    }
}

function search()
{
    var input = document.getElementById("input");
    window.location.href = "results.html?search=" + input.value;
}

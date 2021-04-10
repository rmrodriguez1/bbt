
window.onload = (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const series = urlParams.get('series');
    const season = urlParams.get('season');

    var title = document.getElementById('title'); 
    title.innerText = series + " Season " + season;

    fetchInfo(series, season);
};

function fetchInfo(series, season){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=" + series)
    .then(response => response.json())
    .then(data => displayInfo(data, series, season));
}


function displayInfo(data, series, season){
    var episodes = document.getElementById('episodes'); 
    for (var i=0; i<data.length; i++) if (data[i].season == season)
    {
        var li = document.createElement('li');
        var newNode = document.createElement('a');
        newNode.href = "episode.html?series=" + series + "&season=" + season + "&episode=" + data[i].episode_id;
        newNode.innerText = "Episode "+data[i].episode+": "+data[i].title;
        li.appendChild(newNode)
        episodes.appendChild(li);
    }
}

function search()
{
    var input = document.getElementById("input");
    window.location.href = "results.html?search=" + input.value;
}


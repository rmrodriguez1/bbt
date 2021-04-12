window.onload = (event) => {
    fetchInfo("Breaking+Bad", "seasons_bb");
    fetchInfo("Better+Call+Saul", "seasons_bcs");
};

function fetchInfo(series, id){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=" + series)
        .then(response => response.json())
        .then(data => { return displayInfo(data, series, id) });
}

function displayInfo(data, series, id) {

    var N = data[data.length - 1].season;

    var seasons = document.getElementById(id); 
    for (var i=0; i<N; i++)
    {
        var li = document.createElement('li');
        var newNode = document.createElement('a');
        newNode.href = "./views/season.html?series=" + series + "&season=" + String(i + 1);
        newNode.innerText = "Season " + String(i + 1);
        li.appendChild(newNode)
        seasons.appendChild(li);
    }
}

function search()
{
    var input = document.getElementById("input");
    window.location.href = "views/results.html?search=" + input.value;
}

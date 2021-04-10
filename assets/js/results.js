
var stop = false;
var off = 0;

window.onload = (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    var results = document.getElementById('results'); 
    results.innerText = "Results from: " + search;

    fetchInfo(search);
};

function fetchInfo(search){
    
    if (stop)
    {
        stop = false;
        off = 0;
        return;
    }

    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=" + search + "&limit=10&offset=" + String(off))
        .then(response => response.json())
        .then(data => { return displayInfo(data, search) });

    off += 10;
}


function displayInfo(data, search) {

    if (data.length == 0) stop = true;

    var results = document.getElementById('results'); 
    for (var i=0; i<data.length; i++)
    {
        var li = document.createElement('li');
        var newNode = document.createElement('a');
        newNode.href = "character.html?name=" + data[i].name;
        newNode.innerText = data[i].name;
        li.appendChild(newNode)
        results.appendChild(li);
    }
    
    fetchInfo(search);
}

function search()
{
    var input = document.getElementById("input");
    window.location.href = "results.html?search=" + input.value;
}


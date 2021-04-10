
window.onload = (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    var title = document.getElementById('title'); 
    title.innerText = name;

    fetchInfo(name);
};

function fetchInfo(name){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=" + name)
    .then(response => response.json())
    .then(data => displayInfo(data, name));
}

function displayInfo(data, name){

    data = data[0]

    var picture = document.getElementById('picture');
    picture.src=data.img;

    var id = document.getElementById('id');
    id.innerText="Character id: " + data.char_id;

    if (data.birthday)
    {
        var birthday = document.getElementById('birthday');
        birthday.innerText="Birthday: " + data.birthday;
    }

    if (data.occupation)
    {
        var occupations = document.getElementById('occupations');
        for (var i=0; i<data.occupation.length; i++)
        {
            var li = document.createElement('li');
            var newNode = document.createElement('a');
            newNode.innerText = data.occupation[i];
            li.appendChild(newNode)
            occupations.appendChild(li);
        }
    }

    var status = document.getElementById('status');
    status.innerText="Status: " + data.status;

    var nickname = document.getElementById('nickname');
    nickname.innerText="Nickname: " + data.nickname;

    var portrayed = document.getElementById('portrayed');
    portrayed.innerText="Portrayed by: " + data.portrayed;

    if (data.category)
    {
        var category = document.getElementById('category');
        category.innerText="Category: " + data.category;
    }

    if (data.appearance)
    {
        var appearances = document.getElementById('appearances_bb');
        for (var i=0; i<data.appearance.length; i++)
        {
            var li = document.createElement('li');
            var newNode = document.createElement('a');
            newNode.href = "season.html?series=Breaking+Bad&season=" + data.appearance[i];
            newNode.innerText = "Season " + data.appearance[i];
            li.appendChild(newNode)
            appearances.appendChild(li);
        }
    }

    if (data.better_call_saul_appearance)
    {
        var appearances = document.getElementById('appearances_bcs');
        for (var i=0; i<data.better_call_saul_appearance.length; i++)
        {
            var li = document.createElement('li');
            var newNode = document.createElement('a');
            newNode.href = "season.html?series=Better+Call+Saul&season=" + data.better_call_saul_appearance[i];
            newNode.innerText = "Season " + data.better_call_saul_appearance[i];
            li.appendChild(newNode)
            appearances.appendChild(li);
        }
    }

    fetchQuotes(name);
}

function fetchQuotes(name){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/quotes")
    .then(response => response.json())
    .then(data => displayQuotes(data, name));
}

function displayQuotes(data, name){
    var quotes = document.getElementById('quotes');
    for (var i=0; i<data.length; i++) if (data[i].author == name)
    {
        var li = document.createElement('li');
        var newNode = document.createElement('a');
        newNode.innerText = data[i].quote;
        li.appendChild(newNode)
        quotes.appendChild(li);
    }
}

function search()
{
    var input = document.getElementById("input");
    window.location.href = "results.html?search=" + input.value;
}

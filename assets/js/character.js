function searchBar(searchedName){
    let searchText = document.getElementByID('searchText').value;
    let searchBtn = document.getElementByID('searchBtn').addEventListener('click',search());
}

async function search(){
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters/?name="+searchText)
    .then(response => response.json())
    .then(data => displayCharacter(data));
}

function displayCharacter(data){
   var character = document.getElementById('character'); 
   for (var i=0; i<data.length; i++){
       character.append(data[i].title);
    }
}
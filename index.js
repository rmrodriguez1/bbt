fetch("https://tarea-1-breaking-bad.herokuapp.com/api/")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = characters => {
const charactersDiv = document.querySelector(".breaking-bad-characters");
characters.forEach(character => {
    const characterElement = document.createElement("p");
    characterElement.innerText = 'Character Name: ${character.name}';
    charactersDiv.append(characterElement);
});
}
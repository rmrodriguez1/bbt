async function getEmployees() {
    let response = await
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
    let data = await response.json()
    return data;
    }
    getEmployees().then((data)=> console.log(data))

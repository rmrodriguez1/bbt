
function search()
{
    var input = document.getElementById("input");
    window.location.href = "views/results.html?search=" + input.value;
}

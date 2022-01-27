$(document).ready(() => {
    fetch("https://api.quotable.io/random")
        .then(result => result.json())
        .then(q => {
            document.querySelector("#quotes p").textContent = q.content;
        })
})
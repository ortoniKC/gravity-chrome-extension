$(document).ready(() => {

    chrome.storage.local.get(["name"], (data) => {
        if (data.name)
            changeName(data.name);
    })

    $("#name input").keypress((event) => {
        if (event.which == 13) {
            const name = event.currentTarget.value;
            changeName(name);
            chrome.storage.local.set({ name: name })
        }
    })
    function changeName(name) {
        $("#name div.control").remove();
        $("#name").append(`<h1 class="title">hey ${name}!</h1>`);
    }
})
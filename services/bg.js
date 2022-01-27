(() => {

    fetch("https://pixabay.com/api/?key=25200549-c6e755d16854bf9dfb1dfe886&image_type=illustration&editors_choice=true&colors=white", {
        method: "GET"
    }).then(res => res.json())
        .then(image => {
            console.log(image);
            const img = image.hits[Math.floor(Math.random() * 20)].largeImageURL;
            const bg = document.querySelector(".mainbg");
            bg.style.backgroundImage = `url(${img})`
        });

})();
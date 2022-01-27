navigator.geolocation.getCurrentPosition((position, error) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
        .then(weather => weather.json())
        .then(result => {
            console.log(result);
            const ele = document.querySelector("#weather p")
            ele.textContent = result.main.temp + "°C";
        })

})
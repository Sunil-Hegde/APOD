document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'dZeYNdsiedGCw0Lu1FxiEQGchoZLFK8QvSeCtwtD';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("apod-image").src = data.url;
            document.getElementById("apod-title").innerText = data.title;
            document.getElementById("apod-explanation").innerText = data.explanation;
            let date = data.date;
            const dateArray = date.split("-");
            document.getElementById("date").innerText = `Date : ${dateArray[2]}-${dateArray[1]}-${dateArray[0]}` ;
            document.getElementById("copyright").innerText = `Copyright : ${data.copyright}`;
        })
        .catch(error => console.error("Error fetching APOD data:", error));
});

const url = "https://api.thecatapi.com/v1/images/search?api_key=live_68w3RDXRmu3tzon32H6dymPHZBmUKjSEdWNSc6Ym5wEhLXfNOAfetDMRzn3NxmL3"

const getCatBtn = document.getElementById("getCatBtn");
const catImage = document.getElementById("catImage");

getCatBtn.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
            catImage.style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching cat image:", error);
        });
});

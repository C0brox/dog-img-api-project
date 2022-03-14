window.onload = function() {
const doggos = document.querySelector(".doggos")

function addDoggos(breed) {
    const dogPromise = fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const loadImg = document.createElement("img")
    loadImg.alt = "loading..."
    doggos.appendChild(loadImg)
    
    dogPromise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        
        })
        .then(function(processedResponse) {
                doggos.removeChild(loadImg)
                const img = document.createElement("img")
                img.src = processedResponse.message
                img.alt = "Doge"
                doggos.appendChild(img)
        });
}

const breedSelect = document.getElementById("breeds")
//console.log(breedSelect.value)
document.querySelector(".add-doggo").addEventListener("click", function(){
    addDoggos(breedSelect.value)
});

};

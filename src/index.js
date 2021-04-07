console.log('%c HI', 'color: firebrick') // console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
    imgLoader();
    breedLoader();
    breedSelector();
});

function imgLoader() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const images = document.getElementById('dog-image-container');
    fetch(imgUrl).then(function(response) {
        return response.json();
    }).then(function(json) {
        for (let i = 0; i < json.message.length; i++) {
            let img = document.createElement('img');
            images.appendChild(img);
            img.src = json.message[i];
        };
    });
};

function breedLoader() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const breeds = document.getElementById('dog-breeds');

    fetch(breedUrl).then(function(response) {
        return response.json();
    }).then(function(json) {
        Object.keys(json.message).forEach(function(key) {
            let breed = document.createElement('li');
            breeds.appendChild(breed);
            breed.innerText = `${key}: ${json.message[key]}`;

            breed.addEventListener('click', (event) => {
                breed.style.color = 'green';
            });
        });
    });
};

function breedSelector() {
    const dropdown = document.getElementById('breed-dropdown')

    dropdown.addEventListener('change', (event) => {
        console.log(event.target.value)
        const breedList = document.getElementsByTagName('li')
        for (li of breedList) {
            let target = li.innerText.charAt(0);
            if (target === event.target.value) {
                li.style.display = 'block';
            } else {
                li.style.display = 'none';
            };
        };
    });
};
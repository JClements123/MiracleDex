async function showMiracles() {
    try {
        const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');
        if (!response.ok) throw new Error('HTTP error', response.status);
        const miracles = await response.json();
        console.log(miracles);
        const card_grid = document.getElementById('card-grid');
        miracles.forEach(miracle => {
            let div = document.createElement('div');
            div.innerHTML = '';
            div.innerHTML += `<h2 class="card-title">${miracle.title}</h2>`;
            div.innerHTML += `<h3 class="card-location">${miracle.location}</h3>`;
            div.innerHTML += `<h3 class="card-year">${miracle.year}</h3>`
            div.innerHTML += `<p class="card-summary">${miracle.summary}</p>`;
            div.innerHTML += `<button class="card-button">Learn More</button>`;
            div.className = 'miracle-card';
            card_grid.appendChild(div);
        })
    } catch(error) {
        console.log('Fetch error:', error);
    }
}

showMiracles();

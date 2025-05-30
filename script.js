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
            div.className = 'miracle-card';
            card_grid.appendChild(div);
            div.id = 'card' + miracle.id;
            // ChatGPT utilized for debugging in order to properly append my created h2 element. I was forgetting to
            // say appendChild() and was instead just updating the innerHTML. Cite ChatGPT here.
            let title = document.createElement('h2');
            title.innerHTML = '';
            title.textContent = miracle.title;
            title.className = 'card-title';
            let title_id = 'title' + miracle.id;
            title.id = title_id;
            div.appendChild(title);
            let location_id = 'location' + miracle.id;
            let location = document.createElement('h3');
            location.textContent = miracle.location;
            location.className = 'card-location';
            location.id = location_id;
            div.appendChild(location);
            let year_id = 'year' + miracle.id;
            let year = document.createElement('h3');
            year.innerHTML = '';
            year.textContent = miracle.year;
            year.className = 'card-year';
            year.id = year_id;
            div.appendChild(year);
            let summary_id = 'summary' + miracle.id;
            let summary = document.createElement('p');
            summary.innerHTML = '';
            summary.textContent = miracle.summary;
            summary.className = 'card-summary';
            summary.id = summary_id;
            div.appendChild(summary);
            let button_id = 'button' + miracle.id;
            let button = document.createElement('button');
            button.innerHTML = '';
            button.textContent = 'Learn More';
            button.className = 'card-button';
            button.id= button_id;
            div.appendChild(button);
        })
        for (let i = 1; i <= miracles.length; i++) {
            let cardButton = document.getElementById('button' + i);
            cardButton.addEventListener('click', event => {
            })
        }
    } catch(error) {
        console.log('Fetch error:', error);
    }
}



showMiracles();

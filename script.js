async function showMiracles() {
    try {
        const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');
        if (!response.ok) throw new Error('HTTP error', response.status);
        const miracles = await response.json();
        console.log(miracles);
        const card_grid = document.getElementById('card-grid');
        for (let i = 0; i < 6; i++) {
        // miracles.forEach(miracle => {
            let div = document.createElement('div');
            div.innerHTML = '';
            div.className = 'miracle-card';
            card_grid.appendChild(div);
            div.id = 'card' + miracles[i].id;
            // ChatGPT utilized for debugging in order to properly append my created h2 element. I was forgetting to
            // say appendChild() and was instead just updating the innerHTML. Cite ChatGPT here.
            let title = document.createElement('h2');
            title.innerHTML = '';
            title.textContent = miracles[i].title;
            title.className = 'card-title';
            let title_id = 'title' + miracles[i].id;
            title.id = title_id;
            div.appendChild(title);
            let location_id = 'location' + miracles[i].id;
            let location = document.createElement('h3');
            location.textContent = miracles.location;
            location.className = 'card-location';
            location.id = location_id;
            div.appendChild(location);
            let year_id = 'year' + miracles[i].id;
            let year = document.createElement('h3');
            year.innerHTML = '';
            year.textContent = miracles[i].year;
            year.className = 'card-year';
            year.id = year_id;
            div.appendChild(year);
            let summary_id = 'summary' + miracles[i].id;
            let summary = document.createElement('p');
            summary.innerHTML = '';
            summary.textContent = miracles[i].summary;
            summary.className = 'card-summary';
            summary.id = summary_id;
            div.appendChild(summary);
            let button_id = 'button' + miracles[i].id;
            let button = document.createElement('button');
            button.innerHTML = '';
            button.textContent = 'Learn More';
            button.className = 'card-button';
            button.id= button_id;
            div.appendChild(button);
        }
        const loadMore = document.getElementById('load-more');
        loadMore.addEventListener('click', () => {
            let count = card_grid.children.length;
            for (let i = count; i < (count + 6); i++) {
                if (i >= miracles.length) {
                    const loadButton = document.getElementById('load-more');
                    loadButton.remove();
                    break;
                }
                let div = document.createElement('div');
                div.innerHTML = '';
                div.className = 'miracle-card';
                card_grid.appendChild(div);
                div.id = 'card' + miracles[i].id;
                // ChatGPT utilized for debugging in order to properly append my created h2 element. I was forgetting to
                // say appendChild() and was instead just updating the innerHTML. Cite ChatGPT here.
                let title = document.createElement('h2');
                title.innerHTML = '';
                title.textContent = miracles[i].title;
                title.className = 'card-title';
                let title_id = 'title' + miracles[i].id;
                title.id = title_id;
                div.appendChild(title);
                let location_id = 'location' + miracles[i].id;
                let location = document.createElement('h3');
                location.textContent = miracles.location;
                location.className = 'card-location';
                location.id = location_id;
                div.appendChild(location);
                let year_id = 'year' + miracles[i].id;
                let year = document.createElement('h3');
                year.innerHTML = '';
                year.textContent = miracles[i].year;
                year.className = 'card-year';
                year.id = year_id;
                div.appendChild(year);
                let summary_id = 'summary' + miracles[i].id;
                let summary = document.createElement('p');
                summary.innerHTML = '';
                summary.textContent = miracles[i].summary;
                summary.className = 'card-summary';
                summary.id = summary_id;
                div.appendChild(summary);
                let button_id = 'button' + miracles[i].id;
                let button = document.createElement('button');
                button.innerHTML = '';
                button.textContent = 'Learn More';
                button.className = 'card-button';
                button.id= button_id;
                div.appendChild(button);
            }
        })
    } catch(error) {
        console.log('Fetch error:', error);
    }
}


function expand() {

}
// Idea for creating an expanded view: delete all of the cards by
// using a for loop; use remove(); when the X button is clicked
// run showMiracles()

// Other idea: take to a new page to only display the popup; use history.back();


showMiracles();

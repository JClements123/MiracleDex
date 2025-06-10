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
            let title = document.createElement('h2');
            title.innerHTML = '';
            title.textContent = miracles[i].title;
            title.className = 'card-title';
            let title_id = 'title' + miracles[i].id;
            title.id = title_id;
            // ChatGPT utilized for debugging in order to properly append my created h2 element. I was forgetting to
            // say appendChild() and was instead just updating the innerHTML.
            // OpenAI. (2025). Add text to h2. ChatGPT (Version 4o). Retrieved from https://chatgpt.com.
            div.appendChild(title);
            // End of section where ChatGPT was utilized
            let location_id = 'location' + miracles[i].id;
            let location = document.createElement('h3');
            location.textContent = miracles[i].location;
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
            document.getElementById(button.id).addEventListener('click', () => {
                const overlay = document.getElementById('overlay');
                overlay.style.display = 'block';
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                let modal_title = document.createElement('h2');
                modal_title.innerHTML = '';
                modal_title.id = 'modal_title' + miracles[i].id;
                modal_title.textContent = miracles[i].title;
                modal_title.style.textAlign = 'center';
                // modal_title.style.fontSize = '1.5em';
                modal_title.style.marginTop = '10px';
                modal.appendChild(modal_title);
                let modal_location = document.createElement('h3');
                modal_location.innerHTML = '';
                modal_location.id =  'modal_location' + miracles[i].id;
                modal_location.textContent = miracles[i].location;
                modal_location.style.textAlign = 'center';
                // modal_location.style.fontSize = '1.5em';
                modal.appendChild(modal_location);
                let modal_year = document.createElement('h3');
                modal_year.id =  'modal_year' + miracles[i].id;
                modal_year.innerHTML = '';
                modal_year.textContent = miracles[i].year;
                modal_year.style.textAlign = 'center';
                // modal_year.style.fontSize = '1.5em';
                modal.appendChild(modal_year);
                let modal_summary = document.createElement('p');
                modal_summary.id =  'modal_summary' + miracles[i].id;
                modal_summary.innerHTML = '';
                modal_summary.textContent = miracles[i].summary;
                modal_summary.style.textAlign = 'center';
                // modal_summary.style.fontSize = '1.5em';
                modal.appendChild(modal_summary);
                let details = document.createElement('p');
                details.innerHTML = '';
                details.textContent = miracles[i].details;
                details.className = 'card-details';
                let details_id = 'details' + miracles[i].id;
                details.id = details_id;
                details.style.textAlign = 'center';
                // details.style.fontSize = '1.5em';
                modal.appendChild(details);
                let category = document.createElement('p');
                category.innerHTML = '';
                category.textContent = miracles[i].category;
                category.className = 'card-category';
                let category_id = 'category' + miracles[i].id;
                category.id = category_id;
                category.style.textAlign = 'center';
                // category.style.fontSize = '1.5em';
                modal.appendChild(category);
                let type = document.createElement('p');
                type.innerHTML = '';
                type.textContent = miracles[i].type;
                type.className = 'card-type';
                let type_id = 'type' + miracles[i].id;
                type.id = type_id;
                type.style.textAlign = 'center';
                // type.style.fontSize = '1.5em';
                modal.appendChild(type);
                const close = document.getElementById('close-modal');
                close.addEventListener('click', () => {
                    overlay.style.display = 'none';
                    modal.style.display = 'none';
                    modal_title.remove();
                    modal_location.remove();
                    modal_year.remove();
                    modal_summary.remove();
                    category.remove();
                    type.remove();
                    details.remove();
                })
            })
        }
        const loadMore = document.getElementById('load-more');
        loadMore.addEventListener('click', () => {
            let count = card_grid.children.length;
            for (let i = count; i < (count + 6); i++) {
                if (i >= miracles.length) {
                    loadMore.remove();
                    break;
                }
                let div = document.createElement('div');
                div.innerHTML = '';
                div.className = 'miracle-card';
                card_grid.appendChild(div);
                div.id = 'card' + miracles[i].id;
                let title = document.createElement('h2');
                title.innerHTML = '';
                title.textContent = miracles[i].title;
                title.className = 'card-title';
                let title_id = 'title' + miracles[i].id;
                title.id = title_id;
                // ChatGPT utilized for debugging in order to properly append my created h2 element. I was forgetting to
                // say appendChild() and was instead just updating the innerHTML.
                // OpenAI. (2025). Add text to h2. ChatGPT (Version 4o). Retrieved from https://chatgpt.com.
                div.appendChild(title);
                // End of section where ChatGPT was utilized
                let location_id = 'location' + miracles[i].id;
                let location = document.createElement('h3');
                location.textContent = miracles[i].location;
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
                document.getElementById(button.id).addEventListener('click', () => {
                    const overlay = document.getElementById('overlay');
                    overlay.style.display = 'block';
                    const modal = document.getElementById('modal');
                    modal.style.display = 'block';
                    let modal_title = document.createElement('h2');
                    modal_title.innerHTML = '';
                    modal_title.id = 'modal_title' + miracles[i].id;
                    modal_title.class = 'modal_title'
                    modal_title.textContent = miracles[i].title;
                    modal_title.style.textAlign = 'center';
                    // modal_title.style.fontSize = '35px';
                    modal_title.style.marginTop = '10px';
                    modal.appendChild(modal_title);
                    let modal_location = document.createElement('h3');
                    modal_location.innerHTML = '';
                    modal_location.id =  'modal_location' + miracles[i].id;
                    modal_location.textContent = miracles[i].location;
                    modal_location.style.textAlign = 'center';
                    // modal_location.style.fontSize = '30px';
                    modal.appendChild(modal_location);
                    let modal_year = document.createElement('h3');
                    modal_year.id =  'modal_year' + miracles[i].id;
                    modal_year.innerHTML = '';
                    modal_year.textContent = miracles[i].year;
                    modal_year.style.textAlign = 'center';
                    // modal_year.style.fontSize = '30px';
                    modal.appendChild(modal_year);
                    let modal_summary = document.createElement('p');
                    modal_summary.id =  'modal_summary' + miracles[i].id;
                    modal_summary.innerHTML = '';
                    modal_summary.textContent = miracles[i].summary;
                    modal_summary.style.textAlign = 'center';
                    // modal_summary.style.fontSize = '30px';
                    modal.appendChild(modal_summary);
                    let details = document.createElement('p');
                    details.innerHTML = '';
                    details.textContent = miracles[i].details;
                    details.className = 'card-details';
                    let details_id = 'details' + miracles[i].id;
                    details.id = details_id;
                    details.style.textAlign = 'center';
                    // details.style.fontSize = '30px';
                    modal.appendChild(details);
                    let category = document.createElement('p');
                    category.innerHTML = '';
                    category.textContent = miracles[i].category;
                    category.className = 'card-category';
                    let category_id = 'category' + miracles[i].id;
                    category.id = category_id;
                    category.style.textAlign = 'center';
                    // category.style.fontSize = '30px';
                    modal.appendChild(category);
                    let type = document.createElement('p');
                    type.innerHTML = '';
                    type.textContent = miracles[i].title;
                    type.className = 'card-type';
                    let type_id = 'type' + miracles[i].id;
                    type.id = type_id;
                    type.style.textAlign = 'center';
                    // type.style.fontSize = '30px';
                    modal.appendChild(type);
                    const close = document.getElementById('close-modal');
                    close.addEventListener('click', () => {
                        overlay.style.display = 'none';
                        modal.style.display = 'none';
                        modal_title.remove();
                        modal_location.remove();
                        modal_year.remove();
                        modal_summary.remove();
                        category.remove();
                        type.remove();
                        details.remove();
                    })
                })
            }
        })
    } catch(error) {
        console.log('Fetch error:', error);
    }
}

showMiracles();


function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function renderData() {
    const container = document.querySelector('.Maincontainer');

    fetchData().then(data => {
        if (!data) {
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.textContent = item.title;

            const body = document.createElement('p');
            body.textContent = item.body;

            card.appendChild(title);
            card.appendChild(body);
            container.appendChild(card);
        });
    });
}


renderData();

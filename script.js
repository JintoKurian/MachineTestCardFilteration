// script.js

// Fetch data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => displayCards(data))
    .catch(error => console.error('Error loading data:', error));

// Function to display cards
function displayCards(users) {
    const cardContainer = document.querySelector('.cardContainer');
    cardContainer.innerHTML = ''; // Clear any existing content

    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-header">
                <img src="${user.image}" alt="${user.name}" class="profile-image">
                <div>
                    <h3>${user.name}</h3>
                    <p>${user.age} / ${user.gender}</p>
                </div>
            </div>
            <p><strong>Occupation:</strong> ${user.occupation}</p>
            <p><strong>Location:</strong> ${user.location}</p>
            <p>${user.description}</p>
            <h4>User Traits</h4>
            <div class="traits">
                ${user.traits.map(trait => `<span class="trait">${trait}</span>`).join('')}
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

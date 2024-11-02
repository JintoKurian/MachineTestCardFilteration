let usersData = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        usersData = data;  
        displayCards(usersData); 
    })
    .catch(error => console.error('Error loading data:', error));



// Function to display cards
function displayCards(users) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 

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

// Search functionality
const searchInput = document.querySelector('.searchInput');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredUsers = usersData.filter(user => user.name.toLowerCase().includes(query));
    displayCards(filteredUsers);
});

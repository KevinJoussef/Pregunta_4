// Función para buscar y mostrar datos del usuario
async function fetchUserData() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        displayUserData(data.results);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Función para mostrar los datos en la tabla
function displayUserData(users) {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = ''; 

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name.first}</td>
            <td>${user.name.last}</td>
            <td>${user.email}</td>
            <td>${user.location.country}</td>
            <td><img src="${user.picture.thumbnail}" alt="User Picture" /></td>
        `;
        tableBody.appendChild(row);
    });
}

// Obtener datos del usuario en la carga inicial
fetchUserData();

// Agregar el EventListener al botón de "Actualizar"
document.getElementById('update-btn').addEventListener('click', fetchUserData);

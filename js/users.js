// users.js

function getUserById(id) {
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    return storedUsers.find(user => user.id === id); // Trouver l'utilisateur correspondant
}

function updateUser(id, username, email) {
	let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

	const index = storedUsers.findIndex(u => u.id === parseInt(id));
	if (index !== -1) {
		storedUsers[index] = { id: parseInt(id), username, email };
		localStorage.setItem('users', JSON.stringify(storedUsers));
		return true;
	} else {
		return false;
	}
}

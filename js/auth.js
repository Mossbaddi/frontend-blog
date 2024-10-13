// auth.js

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUserId = user.id;
        localStorage.setItem('currentUserId', currentUserId);
        return true;
    } else {
        return false;
    }
}

function register(username, email, password) {
	let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const exists = storedUsers.some(u => u.email === email);
    if (!exists) {
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password,
        };
        storedUsers.push(newUser);
		localStorage.setItem('users', JSON.stringify(storedUsers));
        currentUserId = newUser.id;
        localStorage.setItem('currentUserId', currentUserId);
		
        return true;
    } else {
        return false;
    }
}

// main.js

// Vérifier si un utilisateur est connecté
let currentUserId = localStorage.getItem('currentUserId');

function updateNav() {
    const nav = document.getElementById('nav');
    if (currentUserId) {
        nav.innerHTML = `
            <a href="index.html">Accueil</a>
            <a href="create_post.html">Créer un Poste</a>
            <a href="manage_posts.html">Mes Postes</a>
            <a href="profile.html">Profil</a>
            <a href="#" id="logout">Déconnexion</a>
        `;
        document.getElementById('logout').addEventListener('click', logout);
    } else {
        nav.innerHTML = `
            <a href="index.html">Accueil</a>
            <a href="login.html">Connexion</a>
            <a href="register.html">Inscription</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('currentUserId');
    currentUserId = null;
    updateNav();
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    updateNav();
});

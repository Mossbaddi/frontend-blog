// data.js

// Utilisateurs
let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
    },
    {
        id: 2,
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password456',
    },
];

// Postes
let posts = JSON.parse(localStorage.getItem('posts')) || [
    {
        id: 1,
        title: 'Bienvenue sur mon blog',
        content: 'Ceci est mon premier poste sur ce blog. Merci de votre visite !',
        authorId: 1,
        createdAt: new Date('2023-10-01'),
    },
    {
        id: 2,
        title: 'Deuxième poste',
        content: 'Voici un autre poste pour partager mes pensées.',
        authorId: 2,
        createdAt: new Date('2023-10-05'),
    },
];

// Commentaires
let  comments = JSON.parse(localStorage.getItem('comments')) || [
    {
        id: 1,
        postId: 1,
        content: 'Félicitations pour votre premier poste !',
        authorId: 2,
        createdAt: new Date('2023-10-02'),
    },
];

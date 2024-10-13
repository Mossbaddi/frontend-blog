// posts.js

function getAllPosts() {
    return posts;
}

function getPostById(id) {
    return posts.find(p => p.id === parseInt(id));
}

function createPost(title, content) {
	//  récupérer les posts existants
	let storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    if (currentUserId) {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            authorId: parseInt(currentUserId),
            createdAt: new Date(),
        };
        storedPosts.push(newPost);
		localStorage.setItem('posts', JSON.stringify(storedPosts));
        return newPost;
    } else {
        return null;
    }
}

function deletePost(id) {
	let storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
	storedPosts = storedPosts.filter(p => p.id !== parseInt(id));
	localStorage.setItem('posts', JSON.stringify(storedPosts));
	return true;
}

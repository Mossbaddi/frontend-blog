// comments.js

function getCommentsByPostId(postId) {
	let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
	return storedComments.filter(c => c.postId === parseInt(postId));
}

function addComment(postId, content) {
	let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    if (currentUserId) {
        const newComment = {
            id: comments.length + 1,
            postId: parseInt(postId),
            content,
            authorId: parseInt(currentUserId),
            createdAt: new Date(),
        };
        storedComments.push(newComment);
		localStorage.setItem('comments', JSON.stringify(storedComments));
        return newComment;
    } else {
        return null;
    }
}

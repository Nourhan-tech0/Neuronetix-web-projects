
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready'); 

    const searchInput = document.getElementById('search');
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }

    const posts = document.querySelectorAll('.blog-posts .post');
    if (posts.length === 0) {
        console.error('No posts found');
        return;
    }

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        console.log('Search query:', query);

        posts.forEach(post => {
            const title = post.dataset.title ? post.dataset.title.toLowerCase() : '';
            console.log('Post title:', title);

            if (title.includes(query)) {
                post.style.display = 'block'; // Show post
            } else {
                post.style.display = 'none'; // Hide post
            }
        });
    });
});

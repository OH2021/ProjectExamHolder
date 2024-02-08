document.addEventListener('DOMContentLoaded', function () {
    // Fetch all posts
    const fetchPromises = [
        fetchPosts('https://food-blog.fl-power.no/wp-json/wp/v2/posts?page=1'),
        fetchPosts('https://food-blog.fl-power.no/wp-json/wp/v2/posts?page=2')
    ];

    Promise.all(fetchPromises)
        .then(responses => {
            console.log(responses); // Log responses for inspection
            return Promise.all(responses.map(response => response.json()));
        })
        .then(posts => {
            console.log(posts); // Log posts for inspection
            const allPosts = posts.flat(); // Flatten the array of posts

            // Sort the posts by ID in descending order
            const sortedPosts = allPosts.sort((a, b) => b.id - a.id);

            // Render the sorted posts on the page
            renderPosts(sortedPosts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    function fetchPosts(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response; // Return response object
            });
    }

    function renderPosts(posts) {
        const postContainer = document.getElementById('post-container');

        if (!postContainer) {
            console.error('Post container not found');
            return;
        }

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title.rendered}</h2>
                <div>${post.content.rendered}</div>
            `;
            postContainer.appendChild(postElement);
        });
    }
});

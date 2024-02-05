document.addEventListener('DOMContentLoaded', function () {
    // Get the post ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Fetch the specific blog post using the post ID
    fetch(`https://food-blog.fl-power.no/wp-json/wp/v2/posts/${postId}?_embed`)
        .then(response => response.json())
        .then(post => {
            console.log(post); // Check the console for the fetched data
            const blogPostContent = document.getElementById('blog-post-content');
            blogPostContent.innerHTML = `
                <h2>${post.title.rendered}</h2>
                ${post.content.rendered}
            `;
        })
        
        .catch(error => {
            console.error('Error fetching blog post:', error);
        });
});
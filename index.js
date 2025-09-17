const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.getElementById("main")
const heartEl = document.getElementById("heart")

populatePosts()

mainEl.addEventListener("click", function(e) {
    if (e.target.classList.contains("heart")) {
        let index = e.target.dataset.index
        posts[index].likes++
        populatePosts()
    }
})


function populatePosts(){
    mainEl.innerHTML = "" 
    for(let i = 0; i < posts.length; i++){
        mainEl.innerHTML += ` <div class="post">
                <section class="poster-section">
                    <div>
                        <img src="${posts[i].avatar}" alt="avatar of the poster" class="avatar">
                    </div>
                    <div>
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </section>
                <section>
                    <img src="${posts[i].post}" alt="painting of ${posts[i].name}" class="post-content">
                </section>
                <section class="comment-section">
                    <div class="icons">
                        <img src="images/icon-heart.png" class="icon heart" data-index="${i}" aria-label="like post">
                        <img src="images/icon-comment.png" class="icon" aria-label="comment on post">
                        <img src="images/icon-dm.png" class="icon" aria-label="send dm">
                    </div>
                    <p class="like-count">${posts[i].likes} likes</p>
                    <p class="caption"><span class="comment-username">${posts[i].username}</span> ${posts[i].comment}</p>
                </section>
            </div>` 
    }
}

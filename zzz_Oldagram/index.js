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


// Fazer uma função que renderiza cada post;
// Fazer FOR cada post, executar RenderPost[i++]
// Goodluck 

for (let i=0; i<posts.length; i++) {
    renderPost(posts[i])
}

function renderPost(posts) {

    let mainEl = document.getElementById("main")

    mainEl.innerHTML += `
            <section class="post-content">
                <div class="post-user-info-container">
                    <img class="user-avatar" src="${posts.avatar}" alt="">
                    
                    <div class="post-user-info">
                        <p class="name black">${posts.name}</p>
                        <p class="location">${posts.location}</p>
                    </div>
                </div>

                <div class="post-image-container">
                    <img src="${posts.post}" alt="">
                </div>

                <div class="post-body">
                    <div class="post-buttons">
                        <img class="post-icon" src="images/icon-heart.png" alt="">
                        <img class="post-icon" src="images/icon-comment.png" alt="">
                        <img class="post-icon" src="images/icon-dm.png" alt="">
                    </div>

                    <p class="like-count black">${posts.likes} likes</p>
                    <p class="user-caption"><span class="black">${posts.username}</span> ${posts.comment}</p>
                </div>
                <div class="divider"></div>
            </section>
    `
}
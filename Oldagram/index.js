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


for (let i=0; i<posts.length; i++) {

    renderPost(posts[i], i)

    // const postEl = document.getElementById(`post-${i}`)
    // if (postEl) {
    //     postEl.addEventListener("click", () => likePost(posts[i], i))}

}

for (let i=0; i<posts.length; i++) {
    let postEl = document.getElementById(`post-${i}`);
    let likeEl = document.getElementById(`heart-post-${i}`)
        if (postEl) {
            postEl.addEventListener("dblclick", () => likePost(posts[i], i))
            likeEl.addEventListener("click", () => likePost(posts[i], i))
        }
        
}


function likePost(posts, index) {
    posts.likes += 1

    const likeEl = document.getElementById(`like-count-post-${index}`)
    
    likeEl.innerHTML = `${posts.likes} likes`
    console.log ('likeCount increased to: ', posts.likes)
}

function renderPost(posts, index) {
    let mainEl = document.getElementById("main");

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
                <img id="post-${index}" src="${posts.post}" alt="">
            </div>

            <div class="post-body">
                <div class="post-buttons">

                    <button id="heart-post-${index}" class="heart-icon-post"></button>
                    <button class="comment-icon-post" src="images/icon-comment.png" alt=""></button>
                    <button class="dm-icon-post" src="images/icon-dm.png" alt=""></button>
                </div>

                <p id="like-count-post-${index}" class="like-count black">${posts.likes} likes</p>
                <p class="user-caption"><span class="black">${posts.username}</span> ${posts.comment}</p>
            </div>
            <div class="divider"></div>
        </section>
    `;
    
}
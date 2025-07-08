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

let currentPost = 0

// const post = document.querySelector("main")
const _name = document.querySelector(".userName")
const _username = document.querySelector(".name")
const _location = document.querySelector(".postCity")
const _avatar = document.querySelector(".postProfile")
const _post = document.querySelector(".postVangogh")
const _comment = document.querySelector(".comment")
const _likes = document.querySelector(".likes")

function changeContent(dir) {
    // post.style.opacity = 0
    setTimeout(() => {
        currentPost = (currentPost + dir + posts.length) % posts.length
        _name.textContent = posts[currentPost].name
        _username.textContent = posts[currentPost].username
        _location.textContent = posts[currentPost].location
        _avatar.src = posts[currentPost].avatar
        _post.src = posts[currentPost].post
        _comment.textContent = posts[currentPost].comment
        _likes.textContent = posts[currentPost].likes
    }, 400)

}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        changeContent(1)
    } else if (e.key === "ArrowLeft") {
        changeContent(-1)
    }
})



const toggle = document.querySelector(".likeToggle")

toggle.addEventListener("change", () => {
    let val = parseInt(_likes.textContent)
    if (toggle.checked) {
        val += 1
    } else {
        val -= 1
    }
    _likes.textContent = val
})


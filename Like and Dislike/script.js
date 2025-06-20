const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const reset = document.getElementById("reset");

const suka = document.getElementById("suka");
const tidaksuka = document.getElementById("tidaksuka");

let likeCount = 0;
let dislikeCount = 0;

like.onclick = function() {
    likeCount++;
    suka.textContent = `Likes 👍🏻: ${likeCount}`;
}

dislike.onclick = function() {
    dislikeCount++;
    tidaksuka.textContent = `Dislikes 👎🏻: ${dislikeCount}`;
}

reset.onclick = function() {
    likeCount = 0;
    dislikeCount = 0;
    suka.textContent = `Likes 👍🏻: ${likeCount}`;
    tidaksuka.textContent = `Dislikes 👎🏻: ${dislikeCount}`;
}

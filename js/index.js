let containers = document.querySelectorAll('.container')
let containerIdx = VOTE_INDEX

window.addEventListener('message', (event) => {

    containers[containerIdx].style.display = "none"
    if (event.data == SWIPE_LEFT && containerIdx > USER_INDEX) {
        containerIdx -= 1
    } else if (event.data == SWIPE_RIGHT && containerIdx < VOTE_INDEX) {
        containerIdx += 1
    }
    containers[containerIdx].style.display = "block"

})
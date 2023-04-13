const SWIPE_LEFT            = "swl"
const SWIPE_RIGHT           = "swr"
const ORIGIN                = "*"
const VOTE_INDEX            = 2
const HOME_INDEX            = 1
const USER_INDEX            = 0

const swipePage = () => {
    const MIN_DISTANCE = 20
    let startX = 0
    let startY = 0
    let endX = 0
    let endY = 0

    document.addEventListener('mousedown', (event) => {
        startX = event.clientX
        startY = event.clientY
    });

    document.addEventListener('mouseup', (event) => {
        endX = event.clientX
        endY = event.clientY
        detectSwipe()
    });

    document.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX
        startY = event.touches[0].clientY
    });

    document.addEventListener('touchend', (event) => {
        endX = event.touches[0].clientX
        endY = event.touches[0].clientY
        detectSwipe()
    });

    const detectSwipe = () => {
        if ((endX - startX) >= MIN_DISTANCE) {
            window.parent.postMessage(SWIPE_RIGHT, ORIGIN);
        } else  if ((startX - endX) >= MIN_DISTANCE) {
            window.parent.postMessage(SWIPE_LEFT, ORIGIN);
        }
    }
}

swipePage()
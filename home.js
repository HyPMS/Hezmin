let items = document.querySelectorAll('.paralax-item');
let cards = document.querySelectorAll('.profile-card');
let team = document.getElementById('team');

document.addEventListener("scroll", function(event) {
    items.forEach(item => {
        if(( (team.offsetTop + item.offsetTop) - window.scrollY) < -150){
            item.classList.add('paralax-item-active');
        } else {
            item.classList.remove('paralax-item-active');
        }
    });
});
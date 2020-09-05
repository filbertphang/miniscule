var header = document.getElementsByClassName("site-header")[0]

const storeScroll = () => {
    if (window.pageYOffset > 0) {
        header.classList.add('shadow');
        if (header.id) {
            header.classList.remove('fat');
        }
    }
    else {
        header.classList.remove('shadow');
        if (header.id) {
            header.classList.add('fat');
        }
    }
}
document.addEventListener('scroll', storeScroll);
storeScroll()


scrollingElement = document.scrollingElement || document.documentElement;

function scrollToTop() {
    scrollingElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const bannerImages = [
        './images/index/main-left-banner1.png',
        './images/index/main-left-banner2.png',
        './images/index/main-left-banner3.png'
    ];
    let currentIndex = 0;
    let bannerElement = document.querySelector('#main-left-banner img');

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % bannerImages.length;
        const nextImage = new Image();
        nextImage.src = bannerImages[nextIndex];
        nextImage.classList.add('next');
        bannerElement.parentNode.appendChild(nextImage);

        setTimeout(() => {
            bannerElement.classList.add('prev');
            nextImage.classList.remove('next');
            nextImage.classList.add('active');
            setTimeout(() => {
                bannerElement.remove();
                bannerElement = nextImage;
                currentIndex = nextIndex;
            }, 1000);
        }, 100);
    }

    setInterval(showNextImage, 3000);
});

const leazyLoad = target => {
    const options = {
        rootMargin: '100px 0px',
        threshold: 0.01
    };
    const io = new IntersectionObserver((entris, observer) => {
        entris.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;
                const imgUrl = img.dataset.leazy;

                img.setAttribute('src', imgUrl);

                observer.disconnect();
            }
        })
    }, options);

    io.observe(target);
};

const images = document.querySelectorAll('.lazy-img');

images.forEach(image => {
    leazyLoad(image);
})
window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    let imageUrl;
    if (windowWidth <= 600) {
        imageUrl = './assets/images/image-web-3-mobile.jpg';
      } else {
        imageUrl = './assets/images/image-web-3-desktop.jpg';
      }
      document.querySelector('.main-image').src = imageUrl;
})
class Carousel {
    constructor(domElement) {
        this.element = domElement;
        this.leftButton = domElement.querySelector('.left-button');
        this.leftButton.addEventListener('click', () => this.changeImage('previous'));
        this.rightButton = domElement.querySelector('.right-button');
        this.rightButton.addEventListener('click', () => this.changeImage('next'));
        this.images = domElement.querySelectorAll('img');
        this.currentIndex = 0;
        this.displayImage();
    }

    displayImage() {
        this.currentIndex = this.currentIndex < 0 ? this.images.length - 1 : this.currentIndex % this.images.length;
        let image = this.images[this.currentIndex];
        image.style.display = 'block';
    }

    changeImage(action) {
        let currentImage = this.images[this.currentIndex];
        currentImage.style.display = 'none';
        
        if (action === 'next') {
            this.currentIndex += 1;
        } else if (action === 'previous') {
            this.currentIndex -= 1;
        }

        this.displayImage();
    }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

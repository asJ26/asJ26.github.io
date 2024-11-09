document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const container = document.querySelector('.certifications-grid');
    const leftButton = document.querySelector('.scroll-btn.left');
    const rightButton = document.querySelector('.scroll-btn.right');

    // Scroll amount for each click (width of one card + gap)
    const scrollAmount = 382; // 350px (card width) + 32px (gap)

    // Right button click handler
    rightButton.addEventListener('click', () => {
        container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    });

    // Left button click handler
    leftButton.addEventListener('click', () => {
        container.scrollTo({
            left: container.scrollLeft - scrollAmount,
            behavior: 'smooth'
        });
    });

    // Arrow key handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            container.scrollTo({
                left: container.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
        if (e.key === 'ArrowLeft') {
            container.scrollTo({
                left: container.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Update button visibility
    function updateButtons() {
        // Hide left button if at start
        if (container.scrollLeft <= 0) {
            leftButton.style.display = 'none';
        } else {
            leftButton.style.display = 'flex';
        }

        // Hide right button if at end
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
            rightButton.style.display = 'none';
        } else {
            rightButton.style.display = 'flex';
        }
    }

    // Update buttons on scroll
    container.addEventListener('scroll', updateButtons);
    
    // Initial button state
    updateButtons();

    // Function to track CV downloads
    function trackDownload() {
        // You can add analytics tracking here if needed
        console.log('CV Downloaded');
    }
});
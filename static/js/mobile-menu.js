document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.fh5co-nav-toggle');
    const navbar = document.querySelector('#navbar');
    const dropdowns = document.querySelectorAll('#navbar .dropdown');

    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        navbar.classList.toggle('show');
    });

    // Modified dropdown handling
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation(); // Prevent Bootstrap's handler
                dropdown.classList.toggle('show');
                this.parentElement.querySelector('.dropdown-menu').classList.toggle('show');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !navToggle.contains(e.target)) {
            navbar.classList.remove('show');
            navToggle.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

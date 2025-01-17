$(document).ready(function() {
    // Handle navbar collapse on mobile
    $('.nav a').on('click', function() {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Handle scroll and section opening
    function scrollAndOpen(sectionId, event) {
        event.preventDefault();
        $('.dropdown').removeClass('open');
        $('.navbar-collapse').collapse('hide');

        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    // Make scrollAndOpen available globally
    window.scrollAndOpen = scrollAndOpen;

    // Close dropdown when clicking anywhere on the page
    document.addEventListener('click', function(event) {
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        // Only process if dropdown exists and is open
        if (dropdown && dropdown.classList.contains('open')) {
            // Check if click is outside the dropdown
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('open');
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        }
    });

    // Close dropdown when pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const dropdown = document.querySelector('.dropdown');
            if (dropdown && dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
                const dropdownMenu = document.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        }
    });
});

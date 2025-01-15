$(document).ready(function() {
    // Handle both desktop and mobile dropdowns
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('open');
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Toggle mobile menu on burger click
    $('.js-fh5co-nav-toggle').on('click', function() {
        $('.navbar-collapse').toggleClass('in');
    });

    function scrollAndOpen(sectionId, event) {
        event.preventDefault();

        // Close all dropdowns and mobile menu
        $('.dropdown').removeClass('open');
        $('.navbar-collapse').collapse('hide');

        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    window.scrollAndOpen = scrollAndOpen;
})

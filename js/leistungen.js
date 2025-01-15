$(document).ready(function() {
    // Close on outside clicks
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('open');
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Close on any nav item click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Handle burger toggle
    $('.js-fh5co-nav-toggle').on('click', function() {
        $('.navbar-collapse').toggleClass('in');
    });

    function scrollAndOpen(sectionId, event) {
        event.preventDefault();
        $('.dropdown').removeClass('open');
        $('.navbar-collapse').collapse('hide');

        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    window.scrollAndOpen = scrollAndOpen;
});

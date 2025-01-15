$(document).ready(function() {
    // Close dropdown when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('open');
        }
    });

    function scrollAndOpen(sectionId, event) {
        event.preventDefault();

        // Close Bootstrap dropdown
        $('.dropdown').removeClass('open');

        // Close mobile menu
        $('.navbar-collapse').collapse('hide');

        // Scroll and toggle section
        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    // Make scrollAndOpen available globally
    window.scrollAndOpen = scrollAndOpen;
});

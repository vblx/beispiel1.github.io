$(document).ready(function() {
    // Close mobile navbar on link click
    $('.nav a').on('click', function() {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Handle scroll and section opening
    function scrollAndOpen(sectionId, event) {
        event.preventDefault();
        // Let Bootstrap handle the dropdown closing
        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    window.scrollAndOpen = scrollAndOpen;
});
